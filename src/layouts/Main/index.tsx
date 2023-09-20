import React, { FunctionComponent, Suspense } from 'react';

import Seo from 'components/Atoms/Seo';
import Footer from 'components/Organisms/Footer';
import Header from 'components/Organisms/Header';
import CartProvider from 'utils/Providers/CartProvider';
import CheckoutProvider from 'utils/Providers/CheckoutProvider';
import ThemeProvider from 'utils/Providers/ThemeProvider';
import UserProvider from 'utils/Providers/UserProvider';

interface LayoutProps {
  title: string;
  localeOptions: Hybris.LocaleOptions;
  menuContent: Hybris.MenuElements[];
  footerContent: Hybris.FooterComponentProps;
}

const LayoutMain: FunctionComponent<LayoutProps> = ({ title, ...pageProps }, page) => (
  <ThemeProvider>
    <UserProvider>
      <CartProvider>
        <CheckoutProvider>
          <Header localeOptions={pageProps.localeOptions} menuContent={pageProps.menuContent} />
          <Seo title={title} />
          <Suspense>{page}</Suspense>
          <Footer footerContent={pageProps.footerContent} localeOptions={pageProps.localeOptions} />
        </CheckoutProvider>
      </CartProvider>
    </UserProvider>
  </ThemeProvider>
);

function getLayoutMain(props: LayoutProps): GetLayout {
  return (page) => LayoutMain(props, page);
}

export default getLayoutMain;
