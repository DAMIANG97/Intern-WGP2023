import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import CirclePlus from 'assets/icons/circlePlus.svg';
import FallbackImage from 'components/Atoms/FallbackImage';
import { CategoryComponentProps } from 'components/Organisms/ProductCategories';

import styles from './CategoryItem.module.scss';

const CategoryItem = (category: CategoryComponentProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      <Link href={category.url} className={styles.link} aria-label={category.name}>
        <div className={styles.container}>
          {category.image.url !== '' ? (
            <Image
              src={category.image.url}
              alt={category.image.altText}
              className={styles.picture}
              width={200}
              height={200}
            />
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
