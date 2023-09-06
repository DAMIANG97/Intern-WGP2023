import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import CloseIcon from 'assets/icons/close.svg';
import Button from 'components/Atoms/Button';
import HeadingH3 from 'components/Atoms/HeadingH3';

import styles from './ProductFilterTopBar.module.scss';

interface ProductFilterTopBarProps {
  toggleVisible: () => void;
}

const TAG = 'ProductFilterTopBar';

const ProductFilterTopBar: FunctionComponent<ProductFilterTopBarProps> = ({ toggleVisible }) => {
  const { t } = useTranslation();
  return (
    <div className={styles['product-filters__topbar']}>
      <HeadingH3 className={styles['product-filters__heading']}>{t('components.productFilters.heading')}</HeadingH3>
      <Button className={styles['product-filters__close-button']} variant="button--with-icon" onClick={toggleVisible}>
        <CloseIcon />
      </Button>
    </div>
  );
};

ProductFilterTopBar.displayName = TAG;

export default ProductFilterTopBar;
