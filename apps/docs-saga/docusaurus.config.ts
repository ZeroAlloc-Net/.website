import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig, sharedFavicon } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Saga',
  favicon: sharedFavicon,
  tagline: 'Source-generated long-running process orchestration for .NET',
  url: 'https://saga.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Saga',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Saga' },
    footer: sharedFooter,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/saga/docs',
          sidebarPath: './sidebars.ts',
          exclude: ['**/README.md', '**/pre-push-review*.md', '**/plans/**'],
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],
};

export default config;
