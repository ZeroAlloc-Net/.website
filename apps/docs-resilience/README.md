# docs-resilience

Docusaurus site for [resilience.zeroalloc.net](https://resilience.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Resilience`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Resilience) submodule at `../../repos/resilience/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-resilience
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-resilience
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-resilience
cd apps/docs-resilience && npx wrangler versions upload
```
