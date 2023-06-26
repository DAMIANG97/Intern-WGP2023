import useTranslation from 'next-translate/useTranslation';

import Error from 'modules/Error';

const TAG = 'Custom404Page';

const Custom404Page = () => {
  const { t } = useTranslation();

  return <Error title={t('pages.404.title')} />;
};

Custom404Page.displayName = TAG;

export default Custom404Page;
