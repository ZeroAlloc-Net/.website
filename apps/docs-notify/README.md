# docs-notify

Docusaurus site for [notify.zeroalloc.net](https://notify.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Notify`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Notify) submodule at `../../repos/notify/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-notify
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-notify
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-notify
cd apps/docs-notify && npx wrangler versions upload
```
