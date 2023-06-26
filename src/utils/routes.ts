export const NOT_LOGGED_IN_ROUTES = {
  login: '/login',
} as const;

const LOGGED_IN_ROUTES = {
  home: '/',
};

export const RoutePaths = {
  ...LOGGED_IN_ROUTES,
  ...NOT_LOGGED_IN_ROUTES,
} as const;

export const ROUTES_TITLES = {
  [RoutePaths.home]: 'Home Page',
  [RoutePaths.login]: 'Login Page',
} as const;
