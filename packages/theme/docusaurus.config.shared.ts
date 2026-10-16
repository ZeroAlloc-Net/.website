import { themes as prismThemes } from 'prism-react-renderer';

export const sharedNavbar = {
  logo: {
    alt: 'ZeroAlloc',
    src: 'img/logo.png',
    href: 'https://zeroalloc.net',
  },
  items: [
    {
      href: 'https://zeroalloc.net',
      label: 'Home',
      position: 'left' as const,
    },
    {
      href: 'https://github.com/ZeroAlloc-Net',
      label: 'GitHub',
      position: 'right' as const,
    },
    {
      href: 'https://www.nuget.org/profiles/ZeroAlloc',
      label: 'NuGet',
      position: 'right' as const,
    },
  ],
};

export const sharedFooter = {
  style: 'dark' as const,
  links: [
    {
      title: 'Libraries',
      items: [
        { label: 'Analyzers', href: 'https://analyzers.zeroalloc.net' },
        { label: 'Inject', href: 'https://inject.zeroalloc.net' },
        { label: 'Mediator', href: 'https://mediator.zeroalloc.net' },
        { label: 'Pipeline', href: 'https://pipeline.zeroalloc.net' },
        { label: 'Validation', href: 'https://validation.zeroalloc.net' },
        { label: 'ValueObjects', href: 'https://valueobjects.zeroalloc.net' },
      ],
    },
    {
      title: 'Community',
      items: [
        { label: 'GitHub', href: 'https://github.com/ZeroAlloc-Net' },
        { label: 'NuGet', href: 'https://www.nuget.org/profiles/ZeroAlloc' },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} ZeroAlloc-Net`,
};

export const sharedFavicon = 'img/favicon.png';

export const sharedThemeConfig = {
  colorMode: {
    defaultMode: 'dark' as const,
    disableSwitch: false,
    respectPrefersColorScheme: false,
  },
  prism: {
    theme: prismThemes.oneLight,
    darkTheme: prismThemes.vsDark,
    additionalLanguages: ['csharp', 'bash'],
  },
};

/**
 * Fails the build when the site has no page at its root.
 *
 * Every docs app serves its library's docs/ folder at the site root, so the home page has to come
 * from that folder: an index.md at its top level, or a doc with `slug: /`. Without one, Docusaurus
 * still builds every other page and exits 0, and the deployed site answers 404 at its own address.
 * That is how saga.zeroalloc.net returned 404 behind passing Workers Builds.
 */
export function requireRootPage() {
  return {
    name: 'zeroalloc-require-root-page',
    async postBuild({
      routesPaths,
      siteConfig,
    }: {
      routesPaths: string[];
      siteConfig: { baseUrl: string; url: string };
    }) {
      if (routesPaths.includes(siteConfig.baseUrl)) return;
      throw new Error(
        `${siteConfig.url}${siteConfig.baseUrl} has no page, so the site would return 404 at its root. ` +
          "Add an index.md at the top of the library's docs/ folder, or give one doc `slug: /` " +
          'in its front matter.',
      );
    },
  };
}
