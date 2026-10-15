# docs-serialisation

Docusaurus site for [serialisation.zeroalloc.net](https://serialisation.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Serialisation`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Serialisation) submodule at `../../repos/serialisation/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-serialisation
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-serialisation
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-serialisation
cd apps/docs-serialisation && npx wrangler deploy
```
