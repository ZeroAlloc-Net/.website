# docs-saga

Docusaurus site for [saga.zeroalloc.net](https://saga.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Saga`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Saga) submodule at `../../repos/saga/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-saga
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-saga
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-saga
cd apps/docs-saga && npx wrangler versions upload
```
