import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Resilience',
  favicon: 'icon.png',
  staticDirectories: ['static', '../../repos/resilience/assets'],
  tagline: 'Source-generated zero-allocation resilience policies for .NET',
  url: 'https://resilience.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Resilience',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Resilience', logo: { ...sharedNavbar.logo, src: 'icon.png' } },
    footer: sharedFooter,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/resilience/docs',
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
