# docs-asyncevents

Docusaurus site for [asyncevents.zeroalloc.net](https://asyncevents.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.AsyncEvents`](https://github.com/ZeroAlloc-Net/ZeroAlloc.AsyncEvents) submodule at `../../repos/asyncevents/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-asyncevents
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-asyncevents
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-asyncevents
cd apps/docs-asyncevents && npx wrangler versions upload
```
