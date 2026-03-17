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
    description: 'Source-generated, attribute-based validation for .NET. Zero heap allocations on the valid path — no reflection, no runtime overhead, Native AOT safe.',
    docsUrl: 'https://validation.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.Validation',
    nugetPackage: 'ZeroAlloc.Validation',
    headline: '6.7 ns vs 327 ns (FluentValidation), 0 B',
    available: true,
  },
  {
    name: 'ZeroAlloc.Pipeline',
    slug: 'pipeline',
    description: 'Shared building block for pipeline-aware source generators. Compile-time behavior wiring, no reflection, no heap allocation, Native AOT compatible.',
    docsUrl: 'https://pipeline.zeroalloc.net',
    githubUrl: 'https://github.com/ZeroAlloc-Net/ZeroAlloc.Pipeline',
    nugetPackage: 'ZeroAlloc.Pipeline',
    headline: '6.4× faster at 5 behaviors, 0 B allocated',
    available: true,
  },
];
