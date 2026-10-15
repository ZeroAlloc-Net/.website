# docs-inject

Docusaurus site for [inject.zeroalloc.net](https://inject.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Inject`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Inject) submodule at `../../repos/inject/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-inject
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-inject
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-inject
cd apps/docs-inject && npx wrangler deploy
```
