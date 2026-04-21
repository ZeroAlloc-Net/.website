import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig, sharedFavicon } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Scheduling',
  favicon: sharedFavicon,
  tagline: 'Source-generated background job scheduler for .NET',
  url: 'https://scheduling.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Scheduling',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Scheduling' },
    footer: sharedFooter,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/scheduling/docs',
          sidebarPath: './sidebars.ts',
          exclude: ['**/README.md', '**/pre-push-review*.md', '**/plans/**', '**/regression-report*.md', '**/regression-screenshots/**'],
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
