# docs-cache

Docusaurus site for [cache.zeroalloc.net](https://cache.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Cache`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Cache) submodule at `../../repos/cache/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-cache
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-cache
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-cache
cd apps/docs-cache && npx wrangler versions upload
```
