# docs-valueobjects

Docusaurus site for [valueobjects.zeroalloc.net](https://valueobjects.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.ValueObjects`](https://github.com/ZeroAlloc-Net/ZeroAlloc.ValueObjects) submodule at `../../repos/valueobjects/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-valueobjects
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-valueobjects
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-valueobjects
cd apps/docs-valueobjects && npx wrangler deploy
```
