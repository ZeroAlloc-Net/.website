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

export const sharedThemeConfig = {
  colorMode: {
    defaultMode: 'dark' as const,
    disableSwitch: false,
    respectPrefersColorScheme: false,
  },
  prism: {
    additionalLanguages: ['csharp', 'bash'],
  },
};
