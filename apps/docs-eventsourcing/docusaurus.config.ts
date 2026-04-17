import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig, sharedFavicon } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.EventSourcing',
  favicon: sharedFavicon,
  tagline: 'Zero-allocation event sourcing for .NET 8+',
  url: 'https://eventsourcing.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.EventSourcing',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.EventSourcing' },
    footer: sharedFooter,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/eventsourcing/docs',
          sidebarPath: './sidebars.ts',
          exclude: [
            '**/README.md',
            '**/INDEX.md',
            '**/ADOPTION_GUIDE.md',
            '**/DEPLOYMENT.md',
            '**/DEVELOPMENT.md',
            '**/WEBSITE_INTEGRATION.md',
            '**/pre-push-review*.md',
            '**/plans/**',
            '**/examples/**/*.cs',
          ],
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
