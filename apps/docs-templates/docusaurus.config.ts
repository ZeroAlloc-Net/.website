import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig, requireRootPage } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Templates',
  favicon: 'icon.png',
  staticDirectories: ['static', '../../repos/templates/assets'],
  tagline: 'dotnet new Web API templates for the ZeroAlloc ecosystem, published as Native AOT',
  url: 'https://templates.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Templates',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [requireRootPage],
  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Templates', logo: { ...sharedNavbar.logo, src: 'icon.png' } },
    footer: sharedFooter,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/templates/docs',
          sidebarPath: './sidebars.ts',
          exclude: ['**/pre-push-review*.md', '**/plans/**', 'backlog.md'],
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],
};

export default config;
