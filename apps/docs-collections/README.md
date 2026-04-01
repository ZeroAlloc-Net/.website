# docs-collections

Docusaurus site for [collections.zeroalloc.net](https://collections.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Collections`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Collections) submodule at `../../repos/collections/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-collections
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-collections
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-collections
cd apps/docs-collections && npx wrangler versions upload
```
