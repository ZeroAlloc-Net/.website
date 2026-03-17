# docs-pipeline

Docusaurus site for [pipeline.zeroalloc.net](https://pipeline.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Pipeline`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Pipeline) submodule at `../../repos/pipeline/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-pipeline
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-pipeline
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-pipeline
cd apps/docs-pipeline && npx wrangler deploy
```
