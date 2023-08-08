import { ComponentProps } from 'react';
import { GetStaticProps, NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Error from 'modules/Error';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, HOMEPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getLangCurrSuffix from 'utils/Hybris/getLangCurrSuffix';
import getLocaleOptions from 'utils/Hybris/getLocaleOptions';
import getMenuContent from 'utils/Hybris/getMenuContent';

const TAG = 'Custom404Page';

interface Error404PageProps extends ComponentProps<typeof Custom404Page> {}

const Custom404Page: NextPage = () => {
  const { t } = useTranslation();

  return <Error title={t('pages.404.title')} />;
};

Custom404Page.displayName = TAG;

export const getStaticProps: GetStaticProps<Error404PageProps> = async ({ locale }) => {
  const localeSuffix = getLangCurrSuffix(locale, undefined);
  const localeOptions = await getLocaleOptions(localeSuffix);
  const data = await apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${HOMEPAGE_ENDPOINT}?${localeSuffix}`);
  const menuContent = await getMenuContent(data, localeSuffix);

  return {
    props: {
      localeOptions: localeOptions,
      menuContent: menuContent,
    },
  };
};

export default Custom404Page;
