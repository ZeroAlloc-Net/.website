# AGENTS.md: .website

The ZeroAlloc.net website monorepo: the marketing site (`apps/web`, Astro) and one Docusaurus docs
site per library (`apps/docs-*`, 26 of them), each deployed as its own Cloudflare Workers service.
It is not a .NET library and ships no NuGet package. The docs content itself lives in the library
repos.

## Layout

- `repos/*` are git submodules, one per library, holding the docs that each docs app renders.
  Each docs app reads them at build time through `path: '../../repos/<lib>/docs'` in its
  `docusaurus.config.ts`. Never commit changes inside `repos/`; edit the docs in the library repo.
  Submodule pointers move only through the `chore: update submodules` PR that
  `.github/workflows/update-submodules.yml` opens.
- `apps/docs-*/docs/` holds leftover Docusaurus starter pages, not the rendered docs. The real
  content is under `repos/`.
- `packages/theme` (`@zeroalloc/theme`) is shared by every docs app: navbar, footer, favicon,
  analytics and `requireRootPage`. A change there touches all 26 docs sites.
- `requireRootPage` fails the build when a site has no page at its root. A library whose `docs/`
  has no `index.md` (or a doc with `slug: /`) breaks that docs app's build, not just a page.
- `docs/` holds old plans and review notes, not site content.
- `.github/workflows/trigger-website.yml.template` is for library repos: it is copied there, and
  does nothing in this repo.

## Build and test

Prerequisites: Node 26 (CI), `pnpm` 11.8 or later (`packageManager` pins `pnpm@12.20.0`). Neither
`pnpm` nor the submodules were available while this file was written, so the commands below are
copied from CI and the README, not run.

CI job `build` (`.github/workflows/build.yml`), on every push and PR to `main`, with
`submodules: recursive`:

```bash
pnpm install --frozen-lockfile
pnpm exec turbo build --concurrency=4
```

Keep `--concurrency=4`. turbo's default of 10 Docusaurus builds exceeds the runner's 16 GB and the
runner is killed with no error logged, so the failure looks like infrastructure.

Inner loop, from the README (check out only the submodule you need):

```bash
pnpm install
git submodule update --init repos/validation
pnpm dev --filter @zeroalloc/docs-validation   # port 3023
pnpm build --filter @zeroalloc/docs-validation
pnpm dev --filter @zeroalloc/web               # http://localhost:4321
```

Each docs app has its own dev port, listed in the README. `pnpm dev` for everything needs
`--concurrency 28` because turbo caps persistent tasks at 10. There is no test suite; `turbo build`
is the check. Cloudflare Workers Builds run `pnpm build --filter <app>` per service, so keep that
filter name working when renaming a package.

## Conventions and gotchas

- This is a website, so most org rules below do not apply: the allocation, hot-path,
  NativeAOT, `IsAotCompatible`, benchmark, `AllocationGate`, `docs/performance.md` and NuGet
  verification rules are for the libraries. Do not read their absence here as a defect.
- Release-please is not configured here. The site deploys from `main` on Cloudflare; there are no
  version tags, changelog or package releases. Conventional Commits still apply, and bot PRs use
  `chore: update submodules`.
- New docs app: add `apps/docs-<lib>` (copy a sibling), a unique dev port in its `dev` script, the
  submodule in `.gitmodules`, and the README tables. Each docs app depends on `wrangler` through
  the pnpm `catalog:` entry in `pnpm-workspace.yaml`; do not pin a version in the app.
- `pnpm-workspace.yaml` sets `minimumReleaseAge: 4320` (3 days) and an `allowBuilds` list. A new
  dependency with an install script must be added there, or pnpm 11 fails the install. A lockfile
  entry younger than three days fails the Cloudflare build.
- `pnpm install --frozen-lockfile` is what CI runs: commit `pnpm-lock.yaml` with any dependency
  change.
- Renovate ignores `repos/**`; Docusaurus, Astro, React and GitHub Actions updates are grouped.
- The update-submodules workflow and its release bot token are why bot PRs run `build`. Do not
  switch it back to `GITHUB_TOKEN`: the PR checks then stay `action_required`.

<!-- org-core:start sha256=8faf417fa86f11bd8ad9bc98dfa4683fba44e440291e84c6cb9b0ec3ca0c0e7e (generated from docker-nuc scripts/agents-md/org-core-zeroalloc.md; do not edit here) -->
## Org rules

These rules hold in every ZeroAlloc-Net repo. Each library makes two promises: it works under
NativeAOT and trimming, and its hot path allocates nothing. The 2026-10-11 sweep found 16 of 28 repos
allocating on the hot path, most with docs claiming 0 B.

### Hot path

The operation a consumer runs repeatedly: `Send`, a cache hit, `Validate`, `Map`, `Serialize`, a
resilience call, a state transition, an append, a worker poll, including the idle poll. Startup and
registration are not hot path. For a source generator, the hot path is the code it emits: judge the
snapshots and the generated output.

### Allocation traps the sweep found

| Pattern | Instead |
|---|---|
| `async ValueTask` that only awaits and returns | `return new ValueTask<T>(inner.XAsync(ct));` when the method only forwards a `Task<T>` (return a forwarded `ValueTask<T>` directly). The wrapper stores a synchronous throw in the returned task; the direct return lets it, and the cancellation status of the callee, reach the caller. Keep the `async` wrapper when callers depend on either |
| `Task.WhenAll` over tasks that already completed | skip the await only when every task has `IsCompletedSuccessfully` (`Status == TaskStatus.RanToCompletion` on `netstandard2.0`); otherwise `await Task.WhenAll`, which also reports faults of completed tasks |
| `TagList` or log `params object[]` built before `Enabled`/`IsEnabled` | check first, or `LoggerMessage.Define` |
| event args allocated before checking for subscribers | copy the handler to a local, check, then allocate |
| `new Serializer()` / `new Utf8JsonWriter()` per call | cache stateless instances, reuse writers with `Reset` |
| `GetString()` / `ToString()` round-trips in JSON converters | parse and format through spans |
| `ToArray()` / `ToList()` copies between layers | pass `ReadOnlyMemory<T>` or spans, copy once at most |
| LINQ in emitted code | emit `for` loops |
| `yield` iterator behind a public `GetEnumerator` | public struct enumerator, from the first release |
| `Enum.IsDefined(typeof(E), v)` with a boxed value, `decimal.GetBits(v)` to read the scale | `Enum.IsDefined<E>(v)` when `v` has type `E` (.NET 5 or later, so not on .NET Framework, `netstandard2.0`, `netstandard2.1` or .NET Core 3.1); `v.Scale` for a scale read only (.NET 7 or later, never for the coefficient or sign). Keep the old call on older targets |
| configuration parsed or read per call | parse once and cache |
| an `AsyncLocal` write per call | pass state explicitly |
| a capturing lambda or method-group delegate per call | cache the delegate in a field, or a static lambda |
| a per-key object that is never removed | remove on release; otherwise it is a leak |

Inherent allocations are fine when documented: the consumer's own result, an exception on a failure
path, a one-time cache fill.

### Tests and benchmarks

- Every hot path has an allocation gate test (`AllocationGate` from ZeroAlloc.TestHelpers) that measures
  the whole public call, including any state setup.
- Budgets are exact. If a path allocates, assert that number and comment what it is.
- Test the generated code, not a hand-written stand-in, and cover every shape: each attribute, nested
  collections, and the asynchronous case with a fake that returns pending tasks.
- Benchmarks run in CI through the shared `benchmark-smoke.yml` and target the library's LTS
  frameworks. The benchmark body allocates nothing besides the library itself. Run locally with
  `--inProcess`.
- Publish exact allocations and same-run ratios against a `Baseline`, never absolute timings. Run with
  `--launchCount 3`, pin CPUs with `taskset`, give the spread, and label every table.

### NativeAOT and trimming

- Packable runtime projects, and projects consumers publish, set `IsAotCompatible=true` on modern
  target frameworks. Analyzers and source generators target `netstandard2.0`.
- No reflection or runtime code generation on a supported path. An opt-in reflection fallback carries
  honest `[RequiresUnreferencedCode]` / `[RequiresDynamicCode]`. Every suppression must be true;
  remove dead ones.
- The AOT smoke sample publishes with `TreatWarningsAsErrors=true`. If a third-party warning really
  blocks it, use a narrow, justified suppression for that warning. `WarningsNotAsErrors` selects codes,
  not assemblies, so it would also downgrade the same warning from generated code.
- The smoke runs the hot path of every package in the repo. A package without a smoke has unknown AOT
  status. Adapters run against real services in CI service containers; publish-only is a last resort.
  App and template smokes make authenticated requests.

### Docs and shipping

- Docs match measurements. After a hot-path change, re-measure and update `docs/performance.md` and the
  README. Never write "0 B" without a test that asserts it.
- New public API is `feat:`, even for a performance change. Public API changes are additive: never add
  an optional parameter to a shipped signature. A breaking end state goes in a `next-major` issue.
- A behaviour change gets a `## Behaviour change` section in the PR body.
- Conventional Commits with release-please. Subjects start lowercase, body lines stay within 100
  characters, and a body never contains nested parentheses: release-please drops the whole commit.
- Local packs use `9.9.9-local.<sha>`. After a release, verify the package on NuGet.
- Fix review findings in the PR; file an issue only for what cannot go in it.

Full rules, template wiring lessons and the reasons behind each rule: https://github.com/ZeroAlloc-Net/.github/blob/main/AGENTS.md
<!-- org-core:end -->
