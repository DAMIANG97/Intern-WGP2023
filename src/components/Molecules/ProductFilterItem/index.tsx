import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';

import clsx from 'clsx';
import LinkComponent from 'components/Atoms/LinkComponent';
import { getSearchQuery } from 'utils/Hybris/endpoints';

import styles from './ProductFilterItem.module.scss';

interface ProductFilterItemProps {
  value: Hybris.FacetValue;
  filterName: string;
  breadcrumbs: ReadonlyArray<Hybris.Breadcrumb>;
}

const TAG = 'ProductFilterItem';

const ProductFilterItem: FunctionComponent<ProductFilterItemProps> = ({ value, filterName, breadcrumbs }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(value.selected);
  }, [value.selected]);

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
    <li>
      <LinkComponent href={query} className={clsx(active && styles['link--active'])}>
        {value.name}
      </LinkComponent>
    </li>
  );
};

ProductFilterItem.displayName = TAG;

export default ProductFilterItem;
