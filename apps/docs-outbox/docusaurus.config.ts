import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Outbox',
  favicon: 'icon.png',
  staticDirectories: ['static', '../../repos/outbox/assets'],
  tagline: 'Source-generated transactional outbox for .NET',
  url: 'https://outbox.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Outbox',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Outbox', logo: { ...sharedNavbar.logo, src: 'icon.png' } },
    footer: sharedFooter,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/outbox/docs',
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
