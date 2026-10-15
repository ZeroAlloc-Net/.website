# ZeroAlloc.net — Website & Docs

Monorepo for [zeroalloc.net](https://zeroalloc.net) and all per-library documentation sites.

## Structure

| App | URL | Dev port |
|---|---|---|
| `apps/web` | zeroalloc.net | 4321 |
| `apps/docs-analyzers` | analyzers.zeroalloc.net | 3001 |
| `apps/docs-inject` | inject.zeroalloc.net | 3007 |
| `apps/docs-mediator` | mediator.zeroalloc.net | 3009 |
| `apps/docs-valueobjects` | valueobjects.zeroalloc.net | 3024 |
| `apps/docs-validation` | validation.zeroalloc.net | 3023 |
| `apps/docs-pipeline` | pipeline.zeroalloc.net | 3013 |
| `apps/docs-specification` | specification.zeroalloc.net | 3020 |
| `apps/docs-results` | results.zeroalloc.net | 3016 |
| `apps/docs-rest` | rest.zeroalloc.net | 3015 |
| `apps/docs-collections` | collections.zeroalloc.net | 3005 |
| `apps/docs-asyncevents` | asyncevents.zeroalloc.net | 3002 |
| `apps/docs-notify` | notify.zeroalloc.net | 3010 |
| `apps/docs-telemetry` | telemetry.zeroalloc.net | 3022 |
| `apps/docs-eventsourcing` | eventsourcing.zeroalloc.net | 3006 |
| `apps/docs-serialisation` | serialisation.zeroalloc.net | 3019 |
| `apps/docs-scheduling` | scheduling.zeroalloc.net | 3018 |
| `apps/docs-cache` | cache.zeroalloc.net | 3004 |
| `apps/docs-resilience` | resilience.zeroalloc.net | 3014 |
| `apps/docs-statemachine` | statemachine.zeroalloc.net | 3021 |
| `apps/docs-outbox` | outbox.zeroalloc.net | 3012 |
| `apps/docs-saga` | saga.zeroalloc.net | 3017 |
| `apps/docs-authorization` | authorization.zeroalloc.net | 3003 |
| `apps/docs-mapping` | mapping.zeroalloc.net (not deployed yet, [#94](https://github.com/ZeroAlloc-Net/.website/issues/94)) | 3008 |
| `apps/docs-orm` | orm.zeroalloc.net (not deployed yet, [#94](https://github.com/ZeroAlloc-Net/.website/issues/94)) | 3011 |

Library docs live in the library repos, as git submodules under `repos/`, and each docs site reads them at build time.
Every docs app has its own dev port, so several can run side by side.

## Dev

A docs app needs its library's submodule checked out:

```bash
pnpm install
git submodule update --init repos/validation      # once per library you work on
pnpm dev --filter @zeroalloc/web                # marketing site only, http://localhost:4321
pnpm dev --filter @zeroalloc/docs-analyzers     # analyzers docs only, http://localhost:3001
pnpm dev --filter @zeroalloc/docs-inject        # inject docs only, http://localhost:3007
pnpm dev --filter @zeroalloc/docs-mediator      # mediator docs only, http://localhost:3009
pnpm dev --filter @zeroalloc/docs-valueobjects  # valueobjects docs only, http://localhost:3024
pnpm dev --filter @zeroalloc/docs-validation    # validation docs only, http://localhost:3023
pnpm dev --filter @zeroalloc/docs-pipeline      # pipeline docs only, http://localhost:3013
pnpm dev --filter @zeroalloc/docs-specification # specification docs only, http://localhost:3020
pnpm dev --filter @zeroalloc/docs-results       # results docs only, http://localhost:3016
pnpm dev --filter @zeroalloc/docs-rest          # rest docs only, http://localhost:3015
pnpm dev --filter @zeroalloc/docs-collections   # collections docs only, http://localhost:3005
pnpm dev --filter @zeroalloc/docs-asyncevents   # asyncevents docs only, http://localhost:3002
pnpm dev --filter @zeroalloc/docs-notify        # notify docs only, http://localhost:3010
pnpm dev --filter @zeroalloc/docs-telemetry     # telemetry docs only, http://localhost:3022
pnpm dev --filter @zeroalloc/docs-eventsourcing # eventsourcing docs only, http://localhost:3006
pnpm dev --filter @zeroalloc/docs-serialisation # serialisation docs only, http://localhost:3019
pnpm dev --filter @zeroalloc/docs-scheduling    # scheduling docs only, http://localhost:3018
pnpm dev --filter @zeroalloc/docs-cache         # cache docs only, http://localhost:3004
pnpm dev --filter @zeroalloc/docs-resilience    # resilience docs only, http://localhost:3014
pnpm dev --filter @zeroalloc/docs-statemachine  # statemachine docs only, http://localhost:3021
pnpm dev --filter @zeroalloc/docs-outbox        # outbox docs only, http://localhost:3012
pnpm dev --filter @zeroalloc/docs-saga          # saga docs only, http://localhost:3017
pnpm dev --filter @zeroalloc/docs-authorization # authorization docs only, http://localhost:3003
pnpm dev --filter @zeroalloc/docs-mapping       # mapping docs only, http://localhost:3008
pnpm dev --filter @zeroalloc/docs-orm           # orm docs only, http://localhost:3011
```

Pass `--filter` more than once to run several apps together. turbo refuses more than 10 persistent
tasks by default, so running all 25 apps at once needs `pnpm dev --concurrency 26` and every
submodule checked out.

## Build

```bash
pnpm build                                      # all apps
pnpm build --filter @zeroalloc/web              # marketing site only
```

## Submodules

```bash
# Clone with submodules
git clone --recurse-submodules https://github.com/ZeroAlloc-Net/.website

# Update all submodules to latest
git submodule update --remote --recursive
```

## Cloudflare Workers

Each app is a separate Cloudflare Workers service. Build and deploy commands configured in the Cloudflare dashboard:

| Service | Build command | Deploy command |
|---|---|---|
| `za-web` | `pnpm build --filter @zeroalloc/web` | `cd apps/web && npx wrangler deploy` |
| `za-docs-analyzers` | `pnpm build --filter @zeroalloc/docs-analyzers` | `cd apps/docs-analyzers && npx wrangler deploy` |
| `za-docs-inject` | `pnpm build --filter @zeroalloc/docs-inject` | `cd apps/docs-inject && npx wrangler deploy` |
| `za-docs-mediator` | `pnpm build --filter @zeroalloc/docs-mediator` | `cd apps/docs-mediator && npx wrangler deploy` |
| `za-docs-valueobjects` | `pnpm build --filter @zeroalloc/docs-valueobjects` | `cd apps/docs-valueobjects && npx wrangler deploy` |
| `za-docs-validation` | `pnpm build --filter @zeroalloc/docs-validation` | `cd apps/docs-validation && npx wrangler deploy` |
| `za-docs-pipeline` | `pnpm build --filter @zeroalloc/docs-pipeline` | `cd apps/docs-pipeline && npx wrangler deploy` |
| `za-docs-specification` | `pnpm build --filter @zeroalloc/docs-specification` | `cd apps/docs-specification && npx wrangler deploy` |
| `za-docs-results` | `pnpm build --filter @zeroalloc/docs-results` | `cd apps/docs-results && npx wrangler deploy` |
| `za-docs-rest` | `pnpm build --filter @zeroalloc/docs-rest` | `cd apps/docs-rest && npx wrangler deploy` |
| `za-docs-collections` | `pnpm build --filter @zeroalloc/docs-collections` | `cd apps/docs-collections && npx wrangler deploy` |
| `za-docs-asyncevents` | `pnpm build --filter @zeroalloc/docs-asyncevents` | `cd apps/docs-asyncevents && npx wrangler deploy` |
| `za-docs-notify` | `pnpm build --filter @zeroalloc/docs-notify` | `cd apps/docs-notify && npx wrangler deploy` |
| `za-docs-telemetry` | `pnpm build --filter @zeroalloc/docs-telemetry` | `cd apps/docs-telemetry && npx wrangler deploy` |
| `za-docs-eventsourcing` | `pnpm build --filter @zeroalloc/docs-eventsourcing` | `cd apps/docs-eventsourcing && npx wrangler deploy` |
| `za-docs-serialisation` | `pnpm build --filter @zeroalloc/docs-serialisation` | `cd apps/docs-serialisation && npx wrangler deploy` |
| `za-docs-scheduling` | `pnpm build --filter @zeroalloc/docs-scheduling` | `cd apps/docs-scheduling && npx wrangler deploy` |
| `za-docs-cache` | `pnpm build --filter @zeroalloc/docs-cache` | `cd apps/docs-cache && npx wrangler deploy` |
| `za-docs-resilience` | `pnpm build --filter @zeroalloc/docs-resilience` | `cd apps/docs-resilience && npx wrangler deploy` |
| `za-docs-statemachine` | `pnpm build --filter @zeroalloc/docs-statemachine` | `cd apps/docs-statemachine && npx wrangler deploy` |
| `za-docs-outbox` | `pnpm build --filter @zeroalloc/docs-outbox` | `cd apps/docs-outbox && npx wrangler deploy` |
| `za-docs-saga` | `pnpm build --filter @zeroalloc/docs-saga` | `cd apps/docs-saga && npx wrangler deploy` |
| `za-docs-authorization` | `pnpm build --filter @zeroalloc/docs-authorization` | `cd apps/docs-authorization && npx wrangler deploy` |
| `za-docs-mapping` | `pnpm build --filter @zeroalloc/docs-mapping` | `cd apps/docs-mapping && npx wrangler deploy` |
| `za-docs-orm` | `pnpm build --filter @zeroalloc/docs-orm` | `cd apps/docs-orm && npx wrangler deploy` |

Set `NODE_VERSION=20` as an environment variable in each service. Root directory: `/`.
`mapping.zeroalloc.net` and `orm.zeroalloc.net` do not resolve yet; see [#94](https://github.com/ZeroAlloc-Net/.website/issues/94).

## Submodule auto-update

When docs change in a library repo, it sends a `repository_dispatch` event to this repo. That runs
`.github/workflows/update-submodules.yml`, which moves every submodule to its remote tip and opens
or updates the `chore: update submodules` pull request. Merging it to `main` rebuilds the Cloudflare
Workers services.

To wire up a library repo, copy `.github/workflows/trigger-website.yml.template` to `.github/workflows/trigger-website.yml` in that repo and add a `WEBSITE_DISPATCH_TOKEN` secret (fine-grained PAT with `Actions: write` on `ZeroAlloc-Net/.website`).
