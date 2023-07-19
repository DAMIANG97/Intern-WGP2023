import React, { FunctionComponent, Suspense } from 'react';

import Header from 'components/Header';
import Seo from 'components/Seo';
import ThemeProvider from 'utils/Providers/ThemeProvider';

interface LayoutProps {
  title: string;
}

const LayoutMain: FunctionComponent<LayoutProps> = ({ title }, page) => (
  <ThemeProvider>
    <Header />
    <Seo title={title} />
    <h1>{title}</h1>
    <Suspense>{page}</Suspense>
  </ThemeProvider>
);

function getLayoutMain(props: LayoutProps): GetLayout {
  return (page) => LayoutMain(props, page);
}

export default getLayoutMain;
