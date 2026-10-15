# docs-eventsourcing

Docusaurus site for [eventsourcing.zeroalloc.net](https://eventsourcing.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.EventSourcing`](https://github.com/ZeroAlloc-Net/ZeroAlloc.EventSourcing) submodule at `../../repos/eventsourcing/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-eventsourcing
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-eventsourcing
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-eventsourcing
cd apps/docs-eventsourcing && npx wrangler deploy
```
