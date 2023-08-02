import { ComponentProps } from 'react';
import { GetStaticProps, NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';

import Error from 'modules/Error';
import { getLocaleOptions } from 'utils/Hybris/getLocaleOptions';

const TAG = 'Custom500Page';

interface Error500PageProps extends ComponentProps<typeof Custom500Page> {}

const Custom500Page: NextPage = () => {
  const { t } = useTranslation();

  return <Error title={t('pages.500.title')} />;
};

Custom500Page.displayName = TAG;

export const getStaticProps: GetStaticProps<Error500PageProps> = async ({ locale }) => {
  const localeOptions = await getLocaleOptions(locale, 'USD');
  return {
    props: {
      localeOptions: localeOptions,
    },
  };
};

export default Custom500Page;
