import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import Checkout from 'modules/Checkout';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CHECKOUT_ENDPOINT } from 'utils/Hybris/endpoints';
import getFooterContent from 'utils/Hybris/getFooterContent';
import getLangCurrSuffix from 'utils/Hybris/getLangCurrSuffix';
import getLocaleOptions from 'utils/Hybris/getLocaleOptions';
import getMenuContent from 'utils/Hybris/getMenuContent';

interface CheckoutPageProps extends ComponentProps<typeof Checkout> {}

const CheckoutPage: NextPage<CheckoutPageProps> = Checkout;

export const getServerSideProps: GetServerSideProps<CheckoutPageProps> = async ({ locale, req }) => {
  const localeSuffix = getLangCurrSuffix(locale, req.cookies['NEXT_CURRENCY']);
  const [localeOptions, data] = await Promise.all([
    getLocaleOptions(localeSuffix),
    apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${CHECKOUT_ENDPOINT}?${localeSuffix}`),
  ]);
  const [menuContent, footerContent] = await Promise.all([
    getMenuContent(data, localeSuffix),
    getFooterContent(data, localeSuffix),
  ]);

  return {
    props: {
      localeOptions: localeOptions,
      menuContent: menuContent,
      footerContent: footerContent,
    },
  };
};
export default CheckoutPage;
