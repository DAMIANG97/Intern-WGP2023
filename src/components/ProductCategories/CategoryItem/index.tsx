import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import CirclePlus from 'assets/icons/circlePlus.svg';
import { CategoryComponentProps } from 'components/ProductCategories';
import FallbackImage from 'components/ProductCategories/FallbackImage';

import styles from './CategoryItem.module.scss';

const CategoryItem = (category: CategoryComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <Link href={category.url} className={styles.link} aria-label={category.name}>
        <div className={styles.container}>
          {category.image.url !== '' ? (
            <Image src={category.image.url} alt={category.image.altText} className={styles.picture} width={100} height={100} />
          ) : (
            <FallbackImage imgAltText={t('components.fallbackImage.ariaLabel')} className={styles.picture} />
          )}
        </div>
        <div className={styles.wrapper}>
          <CirclePlus className={styles.icon} />
          <span className={styles.title}> {category.name} </span>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
