# docs-flux

Docusaurus site for [flux.zeroalloc.net](https://flux.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Flux`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Flux) submodule at `../../repos/flux/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-flux
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-flux
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-flux
cd apps/docs-flux && npx wrangler deploy
```
