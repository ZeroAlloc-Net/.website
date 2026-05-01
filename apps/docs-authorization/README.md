# docs-authorization

Docusaurus site for [authorization.zeroalloc.net](https://authorization.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Authorization`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Authorization) submodule at `../../repos/authorization/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-authorization
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-authorization
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-authorization
cd apps/docs-authorization && npx wrangler versions upload
```
