import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import Home from 'modules/Home';
import apiFetch from 'utils/apiFetch';
import { BASE_URL, BASESITE_ID, HOMEPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getHeroContent from 'utils/Hybris/getHeroContent';
import { getLocaleOptions } from 'utils/Hybris/getLocaleOptions';

interface HomePageProps extends ComponentProps<typeof Home> {}

const HomePage: NextPage<HomePageProps> = Home;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ locale, req }) => {
  const currency = req.cookies['NEXT_CURRENCY'] || 'USD';
  const data = await apiFetch<Hybris.PageContent>(`${BASE_URL}${BASESITE_ID}/${HOMEPAGE_ENDPOINT}`);
  const localeOptions = await getLocaleOptions(locale, currency);
  const heroContent = await getHeroContent(data, locale, currency);
  return {
    props: {
      heroContent: heroContent,
      localeOptions: localeOptions,
    },
  };
};
export default HomePage;
