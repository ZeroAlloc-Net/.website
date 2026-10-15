# docs-scheduling

Docusaurus site for [scheduling.zeroalloc.net](https://scheduling.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Scheduling`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Scheduling) submodule at `../../repos/scheduling/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-scheduling
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-scheduling
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-scheduling
cd apps/docs-scheduling && npx wrangler deploy
```
