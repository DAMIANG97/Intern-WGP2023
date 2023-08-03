import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import Home from 'modules/Home';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, HOMEPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getCategories from 'utils/Hybris/getCategories';
import getHeroContent from 'utils/Hybris/getHeroContent';
import { getLocaleOptions } from 'utils/Hybris/getLocaleOptions';

interface HomePageProps extends ComponentProps<typeof Home> {}

const HomePage: NextPage<HomePageProps> = Home;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ locale, req }) => {
  const currency = req.cookies['NEXT_CURRENCY'] || 'USD';
  const data = await apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${HOMEPAGE_ENDPOINT}`);
  const localeOptions = await getLocaleOptions(locale, currency);
  const heroContent = await getHeroContent(data, locale, currency);
  const categoriesContent = await getCategories(data);
  return {
    props: {
      heroContent: heroContent,
      localeOptions: localeOptions,
      categoriesContent: categoriesContent,
    },
  };
};
export default HomePage;
