import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import ProductFilterItem from 'components/Molecules/ProductFilterItem';

import styles from './ProductFilters.module.scss';

interface ProductFiltersProps {
  facets: ReadonlyArray<Hybris.Facet>;
  breadcrumbs: ReadonlyArray<Hybris.Breadcrumb>;
}

const TAG = 'ProductFilters';

const ProductFilters: FunctionComponent<ProductFiltersProps> = ({ facets, breadcrumbs }) => {
  const { t } = useTranslation();
  return (
    <aside aria-label={t('components.productFilters.label')} className={styles['search-filters']}>
      {facets.map((facet) => (
        <li key={facet.name}>
          {facet.name}
          <ul>
            {facet.values.map((value) => (
              <ProductFilterItem key={value.name} value={value} filterName={facet.name} breadcrumbs={breadcrumbs} />
            ))}
          </ul>
        </li>
      ))}
    </aside>
  );
};

ProductFilters.displayName = TAG;

export default ProductFilters;
