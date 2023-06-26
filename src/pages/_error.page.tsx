import useTranslation from 'next-translate/useTranslation';

import Error from 'modules/Error';

const TAG = 'CustomErrorPage';

const CustomErrorPage = () => {
  const { t } = useTranslation();

  return <Error title={t('pages._error.title')} />;
};

CustomErrorPage.displayName = TAG;

export default CustomErrorPage;
