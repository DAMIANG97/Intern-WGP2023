import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import styles from './ProductPrice.module.scss';

interface ProductPriceProps {
  children: string;
  variant?: 'large' | 'cart';
}

const ProductPrice: FunctionComponent<ProductPriceProps> = ({ children, variant }) => {
  return <div className={clsx(styles.price, styles[`price--${variant}`])}>{children}</div>;
};

export default ProductPrice;
