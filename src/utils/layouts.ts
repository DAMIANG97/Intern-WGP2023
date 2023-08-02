import getLayoutMain from 'layouts/Main';
import { RoutePaths, ROUTES_TITLES } from 'utils/routes';

/**
 * Get layout for `Component` based on pathname.
 *
 * @default LayoutMain
 */

interface PageProps {
  localeOptions: Hybris.LocaleOptions;
}

export function getComponentLayout(pageProps: PageProps, pathname: string) {
  const LAYOUTS: Record<string, GetLayout> = {
    [RoutePaths.home]: getLayoutMain({ title: ROUTES_TITLES[RoutePaths.home], ...pageProps }),
    [RoutePaths.login]: getLayoutMain({ title: ROUTES_TITLES[RoutePaths.login], ...pageProps }),
    // ... more routes to come
  };
  for (const route in LAYOUTS) {
    if (pathname.includes(route)) {
      return LAYOUTS[route];
    }
  }
  return getLayoutMain({ title: ROUTES_TITLES[RoutePaths.home], ...pageProps });
}
