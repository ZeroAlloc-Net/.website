# docs-rest

Docusaurus site for [rest.zeroalloc.net](https://rest.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Rest`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Rest) submodule at `../../repos/rest/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-rest
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-rest
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-rest
cd apps/docs-rest && npx wrangler versions upload
```
