import { ComponentProps } from 'react';
import { GetStaticProps, NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Error from 'modules/Error';
import { getLocaleOptions } from 'utils/Hybris/getLocaleOptions';

const TAG = 'Custom404Page';

interface Error404PageProps extends ComponentProps<typeof Custom404Page> {}

const Custom404Page: NextPage = () => {
  const { t } = useTranslation();

  return <Error title={t('pages.404.title')} />;
};

Custom404Page.displayName = TAG;

export const getStaticProps: GetStaticProps<Error404PageProps> = async ({ locale }) => {
  const localeOptions = await getLocaleOptions(locale, 'USD');
  return {
    props: {
      localeOptions: localeOptions,
    },
  };
};

export default Custom404Page;
