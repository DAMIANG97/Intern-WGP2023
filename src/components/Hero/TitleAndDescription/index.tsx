import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from './TitleAndDescription.module.scss';

export interface TitleAndDescriptionProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

const TitleAndDescription = ({ title, description }: TitleAndDescriptionProps) => {
  const { t } = useTranslation();
  return (
    <div className={styles.hero__textContainer}>
      <h1 className={styles.hero__title}>{title}</h1>
      <p className={styles.hero__desc}>{description}</p>
      <Link href="#" className={styles.hero__actionLink} aria-label={t('components.heroActionLink.ariaLabel')}>
        <span>{t('components.heroActionLink.label')}</span>
        <span className={styles.hero__arrowRight}></span>
      </Link>
    </div>
  );
};

export default TitleAndDescription;
