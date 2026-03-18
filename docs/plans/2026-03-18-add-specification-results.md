# Add ZeroAlloc.Specification and ZeroAlloc.Results Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add ZeroAlloc.Specification and ZeroAlloc.Results as fully integrated projects in the monorepo — submodules, Docusaurus apps, wrangler configs, and packages.ts entries.

**Architecture:** Each project follows the pattern of ZeroAlloc.Validation and ZeroAlloc.Pipeline: a git submodule at `repos/<name>` feeds content into a Docusaurus app at `apps/docs-<name>`, which is deployed via Cloudflare Workers using wrangler.

**Tech Stack:** Git submodules, Docusaurus 3.9.2, pnpm workspace, Cloudflare Workers (wrangler)

---

### Task 1: Add ZeroAlloc.Specification submodule

**Files:**
- Modify: `.gitmodules`
- Create: `repos/specification/` (via git submodule add)

**Step 1: Add the submodule**

```bash
git submodule add https://github.com/ZeroAlloc-Net/ZeroAlloc.Specification repos/specification
```

Expected: `repos/specification/` is populated and `.gitmodules` now has the new entry.

**Step 2: Verify submodule content**

```bash
ls repos/specification/docs
ls repos/specification/assets
```

Expected: `docs/` contains markdown files, `assets/` contains `icon.png` and `icon.svg`.

**Step 3: Commit**

```bash
git add .gitmodules repos/specification
git commit -m "chore: add ZeroAlloc.Specification submodule"
```

---

### Task 2: Add ZeroAlloc.Results submodule

**Files:**
- Modify: `.gitmodules`
- Create: `repos/results/` (via git submodule add)

**Step 1: Add the submodule**

```bash
git submodule add https://github.com/ZeroAlloc-Net/ZeroAlloc.Results repos/results
```

**Step 2: Verify submodule content**

```bash
ls repos/results/docs
ls repos/results/assets
```

Expected: `docs/` contains markdown files, `assets/` contains `icon.png` and `icon.svg`.

**Step 3: Commit**

```bash
git add .gitmodules repos/results
git commit -m "chore: add ZeroAlloc.Results submodule"
```

---

### Task 3: Create apps/docs-specification Docusaurus app

**Files:**
- Create: `apps/docs-specification/package.json`
- Create: `apps/docs-specification/docusaurus.config.ts`
- Create: `apps/docs-specification/sidebars.ts`
- Create: `apps/docs-specification/tsconfig.json`
- Create: `apps/docs-specification/wrangler.jsonc`
- Create: `apps/docs-specification/src/css/custom.css`
- Create: `apps/docs-specification/static/.nojekyll`

**Step 1: Create package.json**

```json
{
  "name": "@zeroalloc/docs-specification",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "swizzle": "docusaurus swizzle",
    "deploy": "docusaurus deploy",
    "clear": "docusaurus clear",
    "serve": "docusaurus serve",
    "write-translations": "docusaurus write-translations",
    "write-heading-ids": "docusaurus write-heading-ids",
    "typecheck": "tsc"
  },
  "dependencies": {
    "@docusaurus/core": "3.9.2",
    "@docusaurus/preset-classic": "3.9.2",
    "@docusaurus/theme-mermaid": "^3.9.2",
    "@mdx-js/react": "^3.0.0",
    "@zeroalloc/theme": "workspace:*",
    "clsx": "^2.0.0",
    "prism-react-renderer": "^2.3.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@docusaurus/module-type-aliases": "3.9.2",
    "@docusaurus/tsconfig": "3.9.2",
    "@docusaurus/types": "3.9.2",
    "typescript": "~5.6.2"
  },
  "browserslist": {
    "production": [
      ">0.5%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 3 chrome version",
      "last 3 firefox version",
      "last 5 safari version"
    ]
  },
  "engines": {
    "node": ">=20.0"
  }
}
```

**Step 2: Create docusaurus.config.ts**

```ts
import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Specification',
  favicon: 'icon.png',
  staticDirectories: ['static', '../../repos/specification/assets'],
  tagline: 'Source-generated, zero-allocation specification pattern for .NET 8+',
  url: 'https://specification.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Specification',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Specification', logo: { ...sharedNavbar.logo, src: 'icon.png' } },
    footer: sharedFooter,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/specification/docs',
          sidebarPath: './sidebars.ts',
          exclude: ['**/README.md', '**/pre-push-review*.md'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};

export default config;
```

**Step 3: Create sidebars.ts**

```ts
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
};

export default sidebars;
```

**Step 4: Create tsconfig.json**

```json
{
  "extends": "@docusaurus/tsconfig",
  "compilerOptions": {
    "baseUrl": "."
  },
  "exclude": [".docusaurus", "build"]
}
```

**Step 5: Create wrangler.jsonc**

```jsonc
{
  "name": "za-docs-specification",
  "compatibility_date": "2026-03-18",
  "assets": {
    "directory": "./build"
  }
}
```

**Step 6: Create src/css/custom.css**

Copy the contents exactly from `apps/docs-validation/src/css/custom.css` — the theme CSS is shared and identical across all doc sites.

**Step 7: Create static/.nojekyll**

Create an empty file at `apps/docs-specification/static/.nojekyll`.

**Step 8: Commit**

```bash
git add apps/docs-specification
git commit -m "feat: add docs-specification Docusaurus app"
```

---

### Task 4: Create apps/docs-results Docusaurus app

**Files:**
- Create: `apps/docs-results/package.json`
- Create: `apps/docs-results/docusaurus.config.ts`
- Create: `apps/docs-results/sidebars.ts`
- Create: `apps/docs-results/tsconfig.json`
- Create: `apps/docs-results/wrangler.jsonc`
- Create: `apps/docs-results/src/css/custom.css`
- Create: `apps/docs-results/static/.nojekyll`

**Step 1: Create package.json**

Same as docs-specification's package.json but with `"name": "@zeroalloc/docs-results"`.

**Step 2: Create docusaurus.config.ts**

```ts
import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Results',
  favicon: 'icon.png',
  staticDirectories: ['static', '../../repos/results/assets'],
  tagline: 'Zero-allocation, no-boxing Result<T,E> library for .NET 9',
  url: 'https://results.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Results',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Results', logo: { ...sharedNavbar.logo, src: 'icon.png' } },
    footer: sharedFooter,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/results/docs',
          sidebarPath: './sidebars.ts',
          exclude: ['**/README.md', '**/pre-push-review*.md'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
};

export default config;
```

**Step 3: Create sidebars.ts, tsconfig.json, src/css/custom.css, static/.nojekyll**

Identical to docs-specification — copy the same files.

**Step 4: Create wrangler.jsonc**

```jsonc
{
  "name": "za-docs-results",
  "compatibility_date": "2026-03-18",
  "assets": {
    "directory": "./build"
  }
}
```

**Step 5: Commit**

```bash
git add apps/docs-results
git commit -m "feat: add docs-results Docusaurus app"
```

---

### Task 5: Update packages.ts

**Files:**
- Modify: `apps/web/src/data/packages.ts`

**Step 1: Add two new entries after ZeroAlloc.Pipeline**

```ts
  {
    name: 'ZeroAlloc.Specification',
    slug: 'specification',
    description: 'Source-generated, zero-allocation specification pattern for .NET 8+.',
    docsUrl: 'https://specification.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.Specification',
    nugetPackage: 'ZeroAlloc.Specification',
    headline: 'Struct composition, 0 B allocated',
    available: true,
  },
  {
    name: 'ZeroAlloc.Results',
    slug: 'results',
    description: 'Zero-allocation, no-boxing Result<T,E> library for .NET 9 with full CSharpFunctionalExtensions API parity.',
    docsUrl: 'https://results.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.Results',
    nugetPackage: 'ZeroAlloc.Results',
    headline: '8.7× faster vs CSharpFunctionalExtensions, 0 B',
    available: true,
  },
```

**Step 2: Commit**

```bash
git add apps/web/src/data/packages.ts
git commit -m "feat: add ZeroAlloc.Specification and ZeroAlloc.Results to packages"
```

---

### Task 6: Install dependencies and verify builds

**Step 1: Install dependencies**

```bash
pnpm install
```

Expected: lockfile updated with new workspace packages.

**Step 2: Build docs-specification**

```bash
pnpm build --filter @zeroalloc/docs-specification
```

Expected: `apps/docs-specification/build/` created with static files.

**Step 3: Build docs-results**

```bash
pnpm build --filter @zeroalloc/docs-results
```

Expected: `apps/docs-results/build/` created with static files.

**Step 4: Build web app**

```bash
pnpm build --filter @zeroalloc/web
```

Expected: web app builds successfully with the two new package cards visible.

**Step 5: Commit lockfile**

```bash
git add pnpm-lock.yaml
git commit -m "chore: update lockfile for docs-specification and docs-results"
```

---

### Task 7: Create PR

**Step 1: Push and open PR**

```bash
git push -u origin feat/validation-available
gh pr create --title "feat: add ZeroAlloc.Specification and ZeroAlloc.Results" --body "$(cat <<'EOF'
## Summary
- Adds ZeroAlloc.Specification and ZeroAlloc.Results as git submodules
- Creates Docusaurus doc sites for both (apps/docs-specification, apps/docs-results)
- Adds both to the packages grid on the main website with available: true
- Wrangler configs ready for Cloudflare Workers deployment

## Cloudflare setup needed
For each new project, create a Cloudflare Workers project with:
- Build command: \`pnpm build --filter @zeroalloc/docs-<name>\`
- Deploy command: \`cd apps/docs-<name> && npx wrangler versions upload\`

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```
