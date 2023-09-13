import React, { FunctionComponent, useContext } from 'react';
import useTranslation from 'next-translate/useTranslation';

import CartProduct from 'components/Molecules/CartProduct';
import { CartContext } from 'utils/Providers/CartProvider/context';

import styles from 'components/Molecules/CartItemsList/CartItemsList.module.scss';

interface CartItemsListProps {}

const TAG = 'CartItemsList';

const CartItemsList: FunctionComponent<CartItemsListProps> = () => {
  const { t } = useTranslation('cart');
  const { entries } = useContext(CartContext);
  return (
    <div className={styles['cart-items-list']}>
      <div className={styles['cart-items-list__labels']}>
        <span className={styles['cart-items-list__labels-left']}>{t('components.cartItemsList.item')}</span>
        <div className={styles['cart-items-list__labels-right']}>
          <span>{t('components.product.price')}</span>
          <span>{t('components.cartItemsList.quantity')}</span>
          <span>{t('components.product.subtotal')}</span>
        </div>
      </div>
      <hr className={styles['cart-items-list__lane-top']} />
      {entries !== null && entries !== undefined && entries.length > 0 ? (
        entries.map((entry) => (
          <div key={entry.entryNumber} className={styles['cart-items-list__product-item']}>
            <CartProduct entry={entry} />
          </div>
        ))
      ) : (
        <span className={styles['cart-items-list__no-entries']}>{t('components.cartItemsList.empty')}</span>
      )}
      <hr className={styles['cart-items-list__lane-bottom']} />
    </div>
  );
};

CartItemsList.displayName = TAG;

export default CartItemsList;
