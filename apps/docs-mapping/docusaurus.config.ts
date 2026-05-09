import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig, sharedFavicon } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Mapping',
  favicon: sharedFavicon,
  tagline: 'Source-generated, zero-allocation, AOT-safe Command→Domain→DTO mapper for .NET',
  url: 'https://mapping.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Mapping',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Mapping' },
    footer: sharedFooter,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/mapping/docs',
          sidebarPath: './sidebars.ts',
          exclude: ['**/README.md', '**/pre-push-review*.md', '**/plans/**', '**/backlog.md'],
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
