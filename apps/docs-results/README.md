# docs-results

Docusaurus site for [results.zeroalloc.net](https://results.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Results`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Results) submodule at `../../repos/results/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-results
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-results
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-results
cd apps/docs-results && npx wrangler versions upload
```
