# docs-mapping

Docusaurus site for [mapping.zeroalloc.net](https://mapping.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Mapping`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Mapping) submodule at `../../repos/mapping/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-mapping
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-mapping
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-mapping
cd apps/docs-mapping && npx wrangler deploy
```
