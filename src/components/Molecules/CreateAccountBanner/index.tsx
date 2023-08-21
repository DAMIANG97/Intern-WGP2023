import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import HeadingH3 from 'components/Atoms/HeadingH3';
import TextComponent from 'components/Atoms/TextComponent';

import styles from './CreateAccountBanner.module.scss';

const CreateAccountBanner = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.createAccountBanner__container}>
      <HeadingH3>{t('components.createAccount.title')}</HeadingH3>
      <TextComponent className={styles.createAccountBanner__description}>
        {t('components.createAccount.description')}
      </TextComponent>
    </div>
  );
};

export default CreateAccountBanner;
