# docs-jev

Docusaurus site for [jev.zeroalloc.net](https://jev.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Jev`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Jev) submodule at `../../repos/jev/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-jev
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-jev
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-jev
cd apps/docs-jev && npx wrangler versions upload
```
