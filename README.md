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
| `apps/docs-rest` | rest.zeroalloc.net |
| `apps/docs-collections` | collections.zeroalloc.net |
| `apps/docs-asyncevents` | asyncevents.zeroalloc.net |
| `apps/docs-notify` | notify.zeroalloc.net |
| `apps/docs-telemetry` | telemetry.zeroalloc.net |
| `apps/docs-eventsourcing` | eventsourcing.zeroalloc.net |
| `apps/docs-serialisation` | serialisation.zeroalloc.net |
| `apps/docs-scheduling` | scheduling.zeroalloc.net |
| `apps/docs-cache` | cache.zeroalloc.net |
| `apps/docs-resilience` | resilience.zeroalloc.net |
| `apps/docs-statemachine` | statemachine.zeroalloc.net |
| `apps/docs-outbox` | outbox.zeroalloc.net |
| `apps/docs-saga` | saga.zeroalloc.net |

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
pnpm dev --filter @zeroalloc/docs-rest           # rest docs only
pnpm dev --filter @zeroalloc/docs-collections    # collections docs only
pnpm dev --filter @zeroalloc/docs-asyncevents    # asyncevents docs only
pnpm dev --filter @zeroalloc/docs-notify         # notify docs only
pnpm dev --filter @zeroalloc/docs-telemetry      # telemetry docs only
pnpm dev --filter @zeroalloc/docs-eventsourcing  # eventsourcing docs only
pnpm dev --filter @zeroalloc/docs-serialisation  # serialisation docs only
pnpm dev --filter @zeroalloc/docs-scheduling     # scheduling docs only
pnpm dev --filter @zeroalloc/docs-cache          # cache docs only
pnpm dev --filter @zeroalloc/docs-resilience     # resilience docs only
pnpm dev --filter @zeroalloc/docs-statemachine   # statemachine docs only
pnpm dev --filter @zeroalloc/docs-outbox         # outbox docs only
pnpm dev --filter @zeroalloc/docs-saga           # saga docs only
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

Set `NODE_VERSION=20` as an environment variable in each service. Root directory: `/`.

## Submodule auto-update

When docs change in a library repo, a `repository_dispatch` event is sent to this repo, triggering `.github/workflows/update-submodules.yml` which bumps the submodule pointer and pushes, triggering a Cloudflare Pages rebuild.

To wire up a library repo, copy `.github/workflows/trigger-website.yml.template` to `.github/workflows/trigger-website.yml` in that repo and add a `WEBSITE_DISPATCH_TOKEN` secret (fine-grained PAT with `Actions: write` on `ZeroAlloc-Net/.website`).
