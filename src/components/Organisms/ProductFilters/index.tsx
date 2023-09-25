import React, { FunctionComponent } from 'react';
import router from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import CloseIcon from 'assets/icons/close.svg';
import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import ProductFilterItem from 'components/Molecules/ProductFilterItem';
import ProductFilterTopBar from 'components/Molecules/ProductFilterTopBar';
import { getSearchQuery } from 'utils/Hybris/endpoints';

import styles from './ProductFilters.module.scss';

interface ProductFiltersProps {
  facets: ReadonlyArray<Hybris.Facet>;
  breadcrumbs: ReadonlyArray<Hybris.Breadcrumb>;
  visible: boolean;
  toggleVisible: () => void;
}

const TAG = 'ProductFilters';

const ProductFilters: FunctionComponent<ProductFiltersProps> = ({ facets, breadcrumbs, visible, toggleVisible }) => {
  const { t } = useTranslation();
  const resetFilters = () => {
    const query = router.query;
    router.push(getSearchQuery(`${query.query}`.split(':')[0]));
  };
  return (
    <aside
      aria-label={t('components.productFilters.label')}
      className={clsx(styles['product-filters'], visible && styles['product-filters--visible'])}>
      <div className={styles['product-filters__container']}>
        <ProductFilterTopBar toggleVisible={toggleVisible} />
        <ul className={styles['product-filters__list']}>
          {facets.map((facet) => (
            <ProductFilterItem key={facet.name} facet={facet} breadcrumbs={breadcrumbs} />
          ))}
        </ul>

        <Button
          onClick={resetFilters}
          variant="button--with-icon"
          className={styles['product-filters__reset-filters-button']}>
          {t('components.productFilters.clearAllFilters')}
          <CloseIcon />
        </Button>
      </div>
    </aside>
  );
};

ProductFilters.displayName = TAG;

export default ProductFilters;
