import { ComponentProps } from 'react';
import { GetStaticProps, NextPage } from 'next';

import Home from 'modules/Home';
import apiFetch from 'utils/apiFetch';
import { BASE_URL, HOMEPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getHeroContent from 'utils/Hybris/getHeroContent';

interface HomePageProps extends ComponentProps<typeof Home> {}

const HomePage: NextPage<HomePageProps> = Home;

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const data = await apiFetch<Hybris.PageContent>(`${BASE_URL}${HOMEPAGE_ENDPOINT}`);
  const heroContent = await getHeroContent(data);
  return {
    props: {
      heroContent: heroContent,
    },
  };
};
export default HomePage;
