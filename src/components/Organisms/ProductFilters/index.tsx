import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import ProductFilterItem from 'components/Molecules/ProductFilterItem';
import ProductFilterTopBar from 'components/Molecules/ProductFilterTopBar';

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
      </div>
    </aside>
  );
};

ProductFilters.displayName = TAG;

export default ProductFilters;
