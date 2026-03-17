import path from 'path';
import type { Config } from '@docusaurus/types';
import { sharedNavbar, sharedFooter, sharedThemeConfig } from '@zeroalloc/theme/docusaurus';

const config: Config = {
  title: 'ZeroAlloc.Pipeline',
  favicon: 'icon.png',
  staticDirectories: ['static', '../../repos/pipeline/assets'],
  tagline: 'Shared building block for pipeline-aware source generators — compile-time wiring, zero allocations, Native AOT compatible',
  url: 'https://pipeline.zeroalloc.net',
  baseUrl: '/',
  organizationName: 'ZeroAlloc-Net',
  projectName: 'ZeroAlloc.Pipeline',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  markdown: { format: 'detect', mermaid: true },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    function redirectMissingStaticAssets() {
      return {
        name: 'redirect-missing-static-assets',
        configureWebpack() {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const webpack = require('webpack');
          return {
            plugins: [
              new webpack.NormalModuleReplacementPlugin(
                /ZeroAlloc\.Pipeline\.Benchmarks/,
                path.resolve(__dirname, 'empty-module.js')
              ),
            ],
          };
        },
      };
    },
  ],

  themeConfig: {
    ...sharedThemeConfig,
    navbar: { ...sharedNavbar, title: 'ZeroAlloc.Pipeline', logo: { ...sharedNavbar.logo, src: 'icon.png' } },
    footer: sharedFooter,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          path: '../../repos/pipeline/docs',
          sidebarPath: './sidebars.ts',
          exclude: ['**/README.md', '**/pre-push-review*.md', '**/plans/**'],
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
