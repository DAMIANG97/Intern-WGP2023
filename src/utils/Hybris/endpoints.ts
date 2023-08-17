export const BASESITE_ID = 'electronics-spa';
export const VERSION_ID = '/occ/v2/';
export const BASE_URL = 'https://wgp2023.mooo.com';
export const BASESITE_URL = `${BASE_URL}${VERSION_ID}${BASESITE_ID}`;
export const HOMEPAGE_ENDPOINT = 'cms/pages/homepage';
export const LANGUAGE_ENDPOINT = 'languages';
export const CURRENCY_ENDPOINT = 'currencies';

export function getSuggestionEndpoint(limit: number, term: string): string {
  return `${BASESITE_URL}/products/suggestions?fields=DEFAULT&max=${limit}&term=${term}`;
}
export function getSearchQuery(text: string): string {
  return `/search-result/search?currentPage=0&fields=FULL&pageSize=20&query=${text}`;
}
