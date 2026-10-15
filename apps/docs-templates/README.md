# docs-templates

Docusaurus site for [templates.zeroalloc.net](https://templates.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Templates`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Templates) submodule at `../../repos/templates/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-templates
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-templates
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-templates
cd apps/docs-templates && npx wrangler deploy
```
