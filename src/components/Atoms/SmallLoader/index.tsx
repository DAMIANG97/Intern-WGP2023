import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from './SmallLoader.module.scss';

const TAG = 'SmallLoader';

const SmallLoader: FunctionComponent = () => {
  const { t } = useTranslation();
  return <span role="status" aria-label={t('components.loader.loadingLabel')} className={styles.loader} />;
};

SmallLoader.displayName = TAG;

export default SmallLoader;
