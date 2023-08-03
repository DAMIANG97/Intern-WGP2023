import React, { FunctionComponent, Suspense } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Seo from 'components/Seo';
import ThemeProvider from 'utils/Providers/ThemeProvider';


interface LayoutProps {
  title: string;
  localeOptions: Hybris.LocaleOptions;

}

const LayoutMain: FunctionComponent<LayoutProps> = ({ title, ...pageProps }, page) => (
  <ThemeProvider>
    <Header localeOptions={pageProps.localeOptions} />
    <Seo title={title} />
    <h1>{title}</h1>
    <Suspense>{page}</Suspense>
    <Footer />
  </ThemeProvider>
);

function getLayoutMain(props: LayoutProps): GetLayout {
  return (page) => LayoutMain(props, page);
}

export default getLayoutMain;
