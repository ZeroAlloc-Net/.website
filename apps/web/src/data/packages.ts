export interface Package {
  name: string;
  slug: string;
  description: string;
  docsUrl: string;
  githubUrl: string;
  nugetPackage: string;
  headline: string;
  available: boolean;
}

export const packages: Package[] = [
  {
    name: 'ZeroAlloc.Analyzers',
    slug: 'analyzers',
    description: '42+ Roslyn analyzers that detect allocation-heavy patterns at build time.',
    docsUrl: 'https://analyzers.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.Analyzers',
    nugetPackage: 'ZeroAlloc.Analyzers',
    headline: 'Build-time allocation detection',
    available: true,
  },
  {
    name: 'ZeroAlloc.Inject',
    slug: 'inject',
    description: 'Compile-time dependency injection via Roslyn source generator. No reflection, fully Native AOT safe.',
    docsUrl: 'https://inject.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.Inject',
    nugetPackage: 'ZeroAlloc.Inject',
    headline: '~3 ns vs ~35 ns (Microsoft DI)',
    available: true,
  },
  {
    name: 'ZeroAlloc.Mediator',
    slug: 'mediator',
    description: 'Zero-allocation source-generated mediator for request/response and notifications.',
    docsUrl: 'https://mediator.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.Mediator',
    nugetPackage: 'ZeroAlloc.Mediator',
    headline: '~2 ns vs ~88 ns (MediatR)',
    available: true,
  },
  {
    name: 'ZeroAlloc.ValueObjects',
    slug: 'valueobjects',
    description: 'Source-generated Equals, GetHashCode, == and ToString for existing partial class/struct types.',
    docsUrl: 'https://valueobjects.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.ValueObjects',
    nugetPackage: 'ZeroAlloc.ValueObjects',
    headline: '3.1 ns vs 45.2 ns (CFE)',
    available: true,
  },
  {
    name: 'ZeroAlloc.Validation',
    slug: 'validation',
    description: 'Source-generated validation API — zero allocations, no reflection, Native AOT safe.',
    docsUrl: 'https://validation.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.Validation',
    nugetPackage: 'ZeroAlloc.Validation',
    headline: 'Coming soon',
    available: false,
  },
];
