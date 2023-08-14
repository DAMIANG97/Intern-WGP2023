import { CategoryComponentProps } from 'components/Organisms/ProductCategories';
import getLayoutMain from 'layouts/Main';
import { RoutePaths, ROUTES_TITLES } from 'utils/routes';

/**
 * Get layout for `Component` based on pathname.
 *
 * @default LayoutMain
 */

interface PageProps {
  localeOptions: Hybris.LocaleOptions;
  categoriesContent: CategoryComponentProps[];
  menuContent: Hybris.MenuElements[];
  footerContent: Hybris.FooterComponentProps;
}

export function getComponentLayout(pageProps: PageProps, pathname: string) {
  const LAYOUTS: Record<string, GetLayout> = {
    [RoutePaths.home]: getLayoutMain({
      title: ROUTES_TITLES[RoutePaths.home],
      ...pageProps,
    }),
    [RoutePaths.login]: getLayoutMain({
      title: ROUTES_TITLES[RoutePaths.login],
      ...pageProps,
    }),
    [RoutePaths.searchResult]: getLayoutMain({
      title: ROUTES_TITLES[RoutePaths.searchResult],
      ...pageProps,
    }),
    // ... more routes to come
  };
  for (const route in LAYOUTS) {
    if (pathname.includes(route)) {
      return LAYOUTS[route];
    }
  }
  return getLayoutMain({
    title: ROUTES_TITLES[RoutePaths.home],
    ...pageProps,
  });
}
