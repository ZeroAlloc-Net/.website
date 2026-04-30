# docs-statemachine

Docusaurus site for [statemachine.zeroalloc.net](https://statemachine.zeroalloc.net).

Docs content is sourced from the [`ZeroAlloc.StateMachine`](https://github.com/ZeroAlloc-Net/ZeroAlloc.StateMachine) submodule at `../../repos/statemachine/docs`.

## Dev

```bash
# From repo root
pnpm dev --filter @zeroalloc/docs-statemachine
```

## Build

```bash
# From repo root
pnpm build --filter @zeroalloc/docs-statemachine
```

## Deploy

```bash
pnpm build --filter @zeroalloc/docs-statemachine
cd apps/docs-statemachine && npx wrangler versions upload
```
