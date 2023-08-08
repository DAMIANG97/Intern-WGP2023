import React, { FunctionComponent, Suspense } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Seo from 'components/Seo';
import ThemeProvider from 'utils/Providers/ThemeProvider';

interface LayoutProps {
  title: string;
  localeOptions: Hybris.LocaleOptions;
  menuContent: Hybris.MenuElements[];
}

const LayoutMain: FunctionComponent<LayoutProps> = ({ title, ...pageProps }, page) => (
  <ThemeProvider>
    <Header localeOptions={pageProps.localeOptions} menuContent={pageProps.menuContent} />
    <Seo title={title} />
    <Suspense>{page}</Suspense>
    <Footer />
  </ThemeProvider>
);

function getLayoutMain(props: LayoutProps): GetLayout {
  return (page) => LayoutMain(props, page);
}

export default getLayoutMain;
