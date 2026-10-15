# docs-analyzers

Docusaurus site for [analyzers.zeroalloc.net](https://analyzers.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.Analyzers`](https://github.com/ZeroAlloc-Net/ZeroAlloc.Analyzers) submodule at `../../repos/analyzers/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-analyzers
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-analyzers
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-analyzers
cd apps/docs-analyzers && npx wrangler deploy
```
