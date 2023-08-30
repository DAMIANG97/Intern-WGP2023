import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import Product from 'modules/Product';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, PAGES_ENDPOINT, PRODUCT_ENDPOINT } from 'utils/Hybris/endpoints';
import getFooterContent from 'utils/Hybris/getFooterContent';
import getLangCurrSuffix from 'utils/Hybris/getLangCurrSuffix';
import getLocaleOptions from 'utils/Hybris/getLocaleOptions';
import getMenuContent from 'utils/Hybris/getMenuContent';

interface ProductPageProps extends ComponentProps<typeof Product> {}

const ProductPage: NextPage<ProductPageProps> = Product;

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ locale, req, query }) => {
  const localeSuffix = getLangCurrSuffix(locale, req.cookies['NEXT_CURRENCY']);
  const localeOptions = await getLocaleOptions(localeSuffix);
  const data = await apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${PAGES_ENDPOINT}?${localeSuffix}`);
  const menuContent = await getMenuContent(data, localeSuffix);
  const footerContent = await getFooterContent(data, localeSuffix);
  const productDetails = await apiFetch<Hybris.Product>(
    `${BASESITE_URL}/${PRODUCT_ENDPOINT}/${query.productId}?${localeSuffix}&fields=FULL`,
  );

  return {
    props: {
      localeOptions: localeOptions,
      menuContent: menuContent,
      footerContent: footerContent,
      product: productDetails,
    },
  };
};
export default ProductPage;
