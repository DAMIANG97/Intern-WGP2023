import useTranslation from 'next-translate/useTranslation';

import Error from 'modules/Error';

const TAG = 'Custom500Page';

const Custom500Page = () => {
  const { t } = useTranslation();

  return <Error title={t('pages.500.title')} />;
};

Custom500Page.displayName = TAG;

export default Custom500Page;
