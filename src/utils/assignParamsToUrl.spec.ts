import assignParamsToUrl from 'utils/assignParamsToUrl'

describe('assignParamsToUrl', () => {
  it.each([
    ['/products/123', '/products/[slug]', { slug: 123 }],
    ['/products/123/', '/products/[slug]/', { slug: 123 }],
    ['/products/123', '/products/[...slug]', { slug: 123 }],
    ['/products/123/', '/products/[...slug]/', { slug: 123 }],
    ['/products/123', '/products/[[...slug]]', { slug: 123 }],
    ['/products/123/', '/products/[[...slug]]/', { slug: 123 }],
    ['/products/123', '/products/:slug', { slug: 123 }],
    ['/products/123/', '/products/:slug/', { slug: 123 }],
    ['/123/456/lorem/789', '/[slug]/[...id]/:name/[[...key]]', { slug: 123, name: 'lorem', id: 456, key: 789 }],
    ['/123/456/lorem/789/', '/[slug]/[...id]/:name/[[...key]]/', { slug: 123, name: 'lorem', id: 456, key: 789 }],
    // Additional param
    ['/123/456/lorem/', '/[slug]/[...id]/:name/', { slug: 123, name: 'lorem', id: 456, invalid: 789 }],
    // Nullish param
    ['//', '/[slug]/', { slug: null }],
    // Undefined param
    ['//', '/[slug]/', { slug: undefined }],
  ])('should return %s for url: %s and params:', (expected, url, params) => {
    // Then
    expect(assignParamsToUrl(url, params)).toBe(expected)
  })
})
