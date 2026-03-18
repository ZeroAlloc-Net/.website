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
| `apps/docs-validation` | validation.zeroalloc.net |
| `apps/docs-pipeline` | pipeline.zeroalloc.net |
| `apps/docs-specification` | specification.zeroalloc.net |
| `apps/docs-results` | results.zeroalloc.net |

Library docs live in the library repos (as git submodules under `repos/`) and are read by each docs site at build time.

## Dev

```bash
pnpm install
pnpm dev                                         # all apps in parallel
pnpm dev --filter @zeroalloc/web                 # marketing site only
pnpm dev --filter @zeroalloc/docs-mediator       # mediator docs only
pnpm dev --filter @zeroalloc/docs-validation     # validation docs only
pnpm dev --filter @zeroalloc/docs-pipeline       # pipeline docs only
pnpm dev --filter @zeroalloc/docs-specification  # specification docs only
pnpm dev --filter @zeroalloc/docs-results        # results docs only
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
| `za-docs-specification` | `pnpm build --filter @zeroalloc/docs-specification` | `cd apps/docs-specification && npx wrangler versions upload` |
| `za-docs-results` | `pnpm build --filter @zeroalloc/docs-results` | `cd apps/docs-results && npx wrangler versions upload` |

Set `NODE_VERSION=20` as an environment variable in each service. Root directory: `/`.

## Submodule auto-update

When docs change in a library repo, a `repository_dispatch` event is sent to this repo, triggering `.github/workflows/update-submodules.yml` which bumps the submodule pointer and pushes, triggering a Cloudflare Pages rebuild.

To wire up a library repo, copy `.github/workflows/trigger-website.yml.template` to `.github/workflows/trigger-website.yml` in that repo and add a `WEBSITE_DISPATCH_TOKEN` secret (fine-grained PAT with `Actions: write` on `ZeroAlloc-Net/.website`).
