import React, { FunctionComponent } from 'react';

import Seo from 'components/Seo';

interface LayoutProps {
  title: string;
}

const LayoutMain: FunctionComponent<LayoutProps> = ({ title }, page) => {
  return (
    <div>
      <Seo title={title} />
      <h1>{title}</h1>
      {page}
    </div>
  );
};

type LayoutReturn = (page: React.ReactNode) => React.ReactNode;

function getLayoutMain(props: LayoutProps): LayoutReturn {
  return (page) => LayoutMain(props, page);
}

export default getLayoutMain;
