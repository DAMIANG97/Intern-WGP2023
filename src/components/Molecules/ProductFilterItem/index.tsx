import React, { FunctionComponent, useMemo } from 'react';

import AccordionItem from 'components/Molecules/AccordionItem';
import ProductFilterValue from 'components/Molecules/ProductFilterValue';

import styles from './ProductFilterItem.module.scss';

interface ProductFilterItemProps {
  breadcrumbs: ReadonlyArray<Hybris.Breadcrumb>;
  facet: Readonly<Hybris.Facet>;
}

const TAG = 'ProductFilterItem';

const ProductFilterItem: FunctionComponent<ProductFilterItemProps> = ({ facet, breadcrumbs }) => {
  const selectedValues = useMemo(() => {
    let number = 0;

    facet.values.map((value) => {
      value.selected === true ? number++ : '';
    });

    return number;
  }, [facet.values]);

  const nameWithSelectedValues = `${facet.name}\u00A0(${selectedValues})`;
  return (
    <li key={facet.name} className={styles['product-filter__list-item']}>
      <AccordionItem name={selectedValues > 0 ? nameWithSelectedValues : facet.name} filter>
        <ul className={styles['product-filter__values']}>
          {facet.values.map((value) => (
            <ProductFilterValue key={value.name} value={value} filterName={facet.name} breadcrumbs={breadcrumbs} />
          ))}
        </ul>
      </AccordionItem>
    </li>
  );
};

ProductFilterItem.displayName = TAG;

export default ProductFilterItem;
