# web

Astro site for [zeroalloc.net](https://zeroalloc.net), the landing page that lists every
ZeroAlloc library and links to its docs site.

The library list lives in `src/data/packages.ts`; `src/components/PackagesGrid.astro` renders it.
Add an entry there when a new docs app goes live.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/web
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/web
```

The static output goes to `apps/web/dist`, which `wrangler.jsonc` serves as assets.

## Deploy

```bash
pnpm build --filter @zeroalloc/web
cd apps/web && npx wrangler deploy
```
