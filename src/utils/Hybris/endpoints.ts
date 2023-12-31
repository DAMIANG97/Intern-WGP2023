export const BASESITE_ID = 'electronics-spa';
export const VERSION_ID = '/occ/v2/';
export const BASE_URL = 'https://wgp2023.mooo.com';
export const BASESITE_URL = `${BASE_URL}${VERSION_ID}${BASESITE_ID}`;
export const HOMEPAGE_ENDPOINT = 'cms/pages/homepage';
export const SEARCH_ENDPOINT = 'cms/pages/search';
export const LANGUAGE_ENDPOINT = 'languages';
export const CURRENCY_ENDPOINT = 'currencies';
export const PAGES_ENDPOINT = 'cms/pages/productDetails';
export const PRODUCT_ENDPOINT = 'products';
export const CART_ENDPOINT = 'carts';
export const USERS_ENDPOINT = 'users';
export const ANONYMOUS_ENDPOINT = 'anonymous';
export const ENTRIES_ENDPOINT = 'entries';
export const COUNTRIES_ENDPOINT = 'countries';
export const CHECKOUT_ENDPOINT = 'cms/pages/Checkout';
export const CARTPAGE_ENDPOINT = 'cms/pages/cartPage';
export const AUTHORIZATION_TOKEN_ENDPOINT = 'authorizationserver/oauth/token';
export const TOKEN_REVOKE_ENDPOINT = 'authorizationserver/oauth/revoke';
export const CUSTOMERS_COUPONS_ENDPOINT = 'customercoupons';

export function getSuggestionEndpoint(limit: number, term: string): string {
  return `${BASESITE_URL}/products/suggestions?fields=DEFAULT&max=${limit}&term=${term}`;
}
export function getSearchQuery(text: string): string {
  return `/search-result/search?currentPage=0&fields=FULL&pageSize=20&query=${text}`;
}

export const LINK_PREFIX = {
  brand: '/search-result/search/?currentPage=0&fields=FULL&pageSize=20&query=:relevance:brand:',
  category: '/search-result/search/?currentPage=0&fields=FULL&pageSize=20&query=:relevance:category:',
};

export function getCartGuidEndpoint(user: string, fields: string) {
  return `${BASESITE_URL}/${USERS_ENDPOINT}/${user}/${CART_ENDPOINT}?fields=${fields}`;
}
