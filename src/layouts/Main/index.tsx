import React, { FunctionComponent, Suspense } from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Seo from 'components/Seo';
import ThemeProvider from 'utils/Providers/ThemeProvider';

interface LayoutProps {
  title: string;
  pageContent: Hybris.PageContent;
}

const LayoutMain: FunctionComponent<LayoutProps> = ({ title, ...pageProps }, page) => (
  <ThemeProvider>
    <Header {...pageProps.pageContent} />
    <Seo title={title} />
    <h1>{title}</h1>
    <Suspense>{page}</Suspense>
    <Footer></Footer>
  </ThemeProvider>
);

function getLayoutMain(props: LayoutProps): GetLayout {
  return (page) => LayoutMain(props, page);
}

export default getLayoutMain;
