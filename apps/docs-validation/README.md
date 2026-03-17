# docs-validation

Docusaurus site for [validation.zeroalloc.net](https://validation.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Validation`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Validation) submodule at `../../repos/validation/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-validation
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-validation
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-validation
cd apps/docs-validation && npx wrangler deploy
```
