# docs-telemetry

Docusaurus site for [telemetry.zeroalloc.net](https://telemetry.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Telemetry`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Telemetry) submodule at `../../repos/telemetry/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-telemetry
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-telemetry
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-telemetry
cd apps/docs-telemetry && npx wrangler deploy
```
