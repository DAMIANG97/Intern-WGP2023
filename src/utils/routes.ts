/**
 * Routes that are accessible only when user is NOT logged in
 */
export const NOT_LOGGED_IN_ROUTES = {
  login: '/login',
} as const satisfies Record<string, string>;

/**
 * Routes that are accessible only when user is logged in
 */
const LOGGED_IN_ROUTES = {
  home: '/',
  searchResult: '/search-result',
} as const satisfies Record<string, string>;

/**
 * Routes that are accessible for logged in and not logged in users
 */
const PUBLIC_ROUTES = {} as const satisfies Record<string, string>;

export const RoutePaths = {
  ...PUBLIC_ROUTES,
  ...LOGGED_IN_ROUTES,
  ...NOT_LOGGED_IN_ROUTES,
} as const satisfies Record<string, string>;

export type RoutePathsKeys = keyof typeof RoutePaths;
export type RoutePathsValues = (typeof RoutePaths)[RoutePathsKeys];

export const ROUTES_TITLES = {
  [RoutePaths.home]: 'Home Page',
  [RoutePaths.login]: 'Login Page',
  [RoutePaths.searchResult]: 'Search Result Page',
} as const satisfies Partial<Record<RoutePathsValues, string>>;
