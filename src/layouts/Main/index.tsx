import React, { FunctionComponent } from 'react';

import Header from 'components/Header';
import Seo from 'components/Seo';

interface LayoutProps {
  title: string;
}

const LayoutMain: FunctionComponent<LayoutProps> = ({ title }, page) => {
  return (
    <div>
      <Header />
      <Seo title={title} />
      <h1>{title}</h1>
      {page}
    </div>
  );
};

function getLayoutMain(props: LayoutProps): GetLayout {
  return (page) => LayoutMain(props, page);
}

export default getLayoutMain;
