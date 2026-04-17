import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig, sharedFavicon } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Telemetry',
  favicon: sharedFavicon,
  tagline: 'Source-generated OpenTelemetry proxy for .NET',
  url: 'https://telemetry.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Telemetry',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Telemetry' },
    footer: sharedFooter,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/telemetry/docs',
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
