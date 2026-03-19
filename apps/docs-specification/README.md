# docs-specification

Docusaurus site for [specification.zeroalloc.net](https://specification.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Specification`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Specification) submodule at `../../repos/specification/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-specification
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-specification
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-specification
cd apps/docs-specification && npx wrangler deploy
```
