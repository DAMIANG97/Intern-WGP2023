import getLayoutMain from 'layouts/Main';
import { RoutePaths, ROUTES_TITLES } from 'utils/routes';

const LAYOUTS: Record<string, GetLayout> = {
  [RoutePaths.home]: getLayoutMain({ title: ROUTES_TITLES[RoutePaths.home] }),
  [RoutePaths.login]: getLayoutMain({ title: ROUTES_TITLES[RoutePaths.login] }),
  // ... more routes to come
};

/**
 * Get layout for `Component` based on pathname.
 *
 * @default LayoutMain
 */
export function getComponentLayout(pathname: string) {
  for (const route in LAYOUTS) {
    if (pathname.includes(route)) {
      return LAYOUTS[route];
    }
  }
  return getLayoutMain({ title: ROUTES_TITLES[RoutePaths.home] });
}
