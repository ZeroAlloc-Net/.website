# ZeroAlloc.net — Website & Docs

Monorepo for [zeroalloc.net](https://zeroalloc.net) and all per-library documentation sites.

## Structure

| App | URL |
|---|---|
| `apps/web` | zeroalloc.net |
| `apps/docs-analyzers` | analyzers.zeroalloc.net |
| `apps/docs-inject` | inject.zeroalloc.net |
| `apps/docs-mediator` | mediator.zeroalloc.net |
| `apps/docs-valueobjects` | valueobjects.zeroalloc.net |

Library docs live in the library repos (as git submodules under `repos/`) and are read by each docs site at build time.

## Dev

```bash
pnpm install
pnpm dev                                        # all apps in parallel
pnpm dev --filter @zeroalloc/web                # marketing site only
pnpm dev --filter @zeroalloc/docs-mediator      # mediator docs only
```

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
git submodule update --remote --merge
```

## Cloudflare Pages

Each app is a separate Cloudflare Pages project:

| Project | Build command | Output dir |
|---|---|---|
| `za-web` | `pnpm build --filter @zeroalloc/web` | `apps/web/dist` |
| `za-docs-analyzers` | `pnpm build --filter @zeroalloc/docs-analyzers` | `apps/docs-analyzers/build` |
| `za-docs-inject` | `pnpm build --filter @zeroalloc/docs-inject` | `apps/docs-inject/build` |
| `za-docs-mediator` | `pnpm build --filter @zeroalloc/docs-mediator` | `apps/docs-mediator/build` |
| `za-docs-valueobjects` | `pnpm build --filter @zeroalloc/docs-valueobjects` | `apps/docs-valueobjects/build` |

Set `NODE_VERSION=20` as an environment variable in each project. Root directory: `/`.

## Submodule auto-update

When docs change in a library repo, a `repository_dispatch` event is sent to this repo, triggering `.github/workflows/update-submodules.yml` which bumps the submodule pointer and pushes, triggering a Cloudflare Pages rebuild.

To wire up a library repo, copy `.github/workflows/trigger-website.yml.template` to `.github/workflows/trigger-website.yml` in that repo and add a `WEBSITE_DISPATCH_TOKEN` secret (fine-grained PAT with `Actions: write` on `ZeroAlloc-Net/.website`).
