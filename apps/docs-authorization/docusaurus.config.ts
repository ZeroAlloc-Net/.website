import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Authorization',
  favicon: 'icon.png',
  staticDirectories: ['static', '../../repos/authorization/assets'],
  tagline: 'Source-of-truth authorization primitives for .NET — IAuthorizationPolicy, ISecurityContext, [Authorize], [AuthorizationPolicy].',
  url: 'https://authorization.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Authorization',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Authorization', logo: { ...sharedNavbar.logo, src: 'icon.png' } },
    footer: sharedFooter,
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/authorization/docs',
          sidebarPath: './sidebars.ts',
          exclude: ['**/README.md', '**/pre-push-review*.md', '**/plans/**', '**/backlog.md'],
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
      },
    ],
  ],
};

export default config;
