import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import Home from 'modules/Home';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, HOMEPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getCategories from 'utils/Hybris/getCategories';
import getHeroContent from 'utils/Hybris/getHeroContent';
import getLangCurrSuffix from 'utils/Hybris/getLangCurrSuffix';
import getLocaleOptions from 'utils/Hybris/getLocaleOptions';
import getMenuContent from 'utils/Hybris/getMenuContent';

interface HomePageProps extends ComponentProps<typeof Home> {}

const HomePage: NextPage<HomePageProps> = Home;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ locale, req }) => {
  const localeSuffix = getLangCurrSuffix(locale, req.cookies['NEXT_CURRENCY']);
  const data = await apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${HOMEPAGE_ENDPOINT}?${localeSuffix}`);
  const localeOptions = await getLocaleOptions(localeSuffix);
  const menuContent = await getMenuContent(data, localeSuffix);
  const heroContent = await getHeroContent(data, localeSuffix);
  const categoriesContent = await getCategories(data, localeSuffix);

  return {
    props: {
      heroContent: heroContent,
      localeOptions: localeOptions,
      categoriesContent: categoriesContent,
      menuContent: menuContent,
    },
  };
};
export default HomePage;
