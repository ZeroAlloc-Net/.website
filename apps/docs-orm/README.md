# docs-orm

Docusaurus site for [orm.zeroalloc.net](https://orm.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.ORM`](https://github.com/ZeroAlloc-Net/ZeroAlloc.ORM) submodule at `../../repos/orm/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-orm
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-orm
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-orm
cd apps/docs-orm && npx wrangler deploy
```
