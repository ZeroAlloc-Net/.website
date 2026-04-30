# docs-outbox

Docusaurus site for [outbox.zeroalloc.net](https://outbox.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Outbox`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Outbox) submodule at `../../repos/outbox/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-outbox
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-outbox
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-outbox
cd apps/docs-outbox && npx wrangler versions upload
```
