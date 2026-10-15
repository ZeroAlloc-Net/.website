# docs-mediator

Docusaurus site for [mediator.zeroalloc.net](https://mediator.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Mediator`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Mediator) submodule at `../../repos/mediator/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-mediator
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-mediator
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-mediator
cd apps/docs-mediator && npx wrangler deploy
```
