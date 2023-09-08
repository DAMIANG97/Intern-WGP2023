import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import Cart from 'modules/Cart';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CARTPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getCartHero from 'utils/Hybris/getCartHero';
import getFooterContent from 'utils/Hybris/getFooterContent';
import getLangCurrSuffix from 'utils/Hybris/getLangCurrSuffix';
import getLocaleOptions from 'utils/Hybris/getLocaleOptions';
import getMenuContent from 'utils/Hybris/getMenuContent';

interface CartPageProps extends ComponentProps<typeof Cart> {}

const ProductPage: NextPage<CartPageProps> = Cart;

export const getServerSideProps: GetServerSideProps<CartPageProps> = async ({ locale, res, req }) => {
  const localeSuffix = getLangCurrSuffix(locale, req.cookies['NEXT_CURRENCY']);
  const [localeOptions, data] = await Promise.all([
    getLocaleOptions(localeSuffix),
    apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${CARTPAGE_ENDPOINT}?${localeSuffix}`),
  ]);
  const [menuContent, footerContent, heroContentSearch] = await Promise.all([
    getMenuContent(data, localeSuffix),
    getFooterContent(data, localeSuffix),
    getCartHero(data),
  ]);

  res.setHeader('Cache-Control', 'public, maxage=3600, must-revalidate');

  return {
    props: {
      localeOptions: localeOptions,
      menuContent: menuContent,
      footerContent: footerContent,
      heroContent: heroContentSearch,
      title: data.title,
    },
  };
};
export default ProductPage;
