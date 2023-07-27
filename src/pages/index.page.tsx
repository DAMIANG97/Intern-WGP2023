import { GetStaticProps, NextPage } from 'next';

import Home from 'modules/Home';
import apiFetch from 'utils/apiFetch';

const ComponentsPage: NextPage = Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await apiFetch<Hybris.PageContent>(
    'https://wgp2023.mooo.com:9002/occ/v2/electronics-spa/cms/pages/homepage',
  );
  return {
    props: {
      pageContent: data,
    },
  };
};
export default ComponentsPage;
