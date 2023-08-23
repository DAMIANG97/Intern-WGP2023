import React, { FunctionComponent, useMemo } from 'react';

import clsx from 'clsx';
import LinkComponent from 'components/Atoms/LinkComponent';
import { getSearchQuery } from 'utils/Hybris/endpoints';

import styles from './ProductFilterValue.module.scss';

interface ProductFilterValueProps {
  value: Readonly<Hybris.FacetValue>;
  filterName: string;
  breadcrumbs: ReadonlyArray<Hybris.Breadcrumb>;
}

const TAG = 'ProductFilterValue';

const ProductFilterValue: FunctionComponent<ProductFilterValueProps> = ({ value, filterName, breadcrumbs }) => {
  const query = useMemo(() => {
    const getRemoveQuery = () => {
      const query =
        breadcrumbs.find(
          (breadcrumb) => breadcrumb.facetName === filterName && breadcrumb.facetValueName === value.name,
        )?.removeQuery.query.value ?? '';
      return getSearchQuery(query);
    };

    const href = value.selected ? getRemoveQuery() : getSearchQuery(value.query.query.value);
    return href;
  }, [breadcrumbs, value, filterName]);

  return (
    <li className={styles['item']}>
      <LinkComponent href={query} className={clsx(styles.link, value.selected && styles['link--active'])}>
        {value.name}
      </LinkComponent>
    </li>
  );
};

ProductFilterValue.displayName = TAG;

export default ProductFilterValue;
