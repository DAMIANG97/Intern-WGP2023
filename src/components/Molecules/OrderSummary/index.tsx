import React, { FunctionComponent, useContext } from 'react';
import useTranslation from 'next-translate/useTranslation';

import AccordionItem from 'components/Molecules/AccordionItem';
import CheckoutProduct from 'components/Molecules/CheckoutProduct';
import { CartContext } from 'utils/Providers/CartProvider/context';

import styles from 'components/Molecules/OrderSummary/OrderSummary.module.scss';

const TAG = 'OrderSummary';

const OrderSummary: FunctionComponent = () => {
  const { t } = useTranslation('checkout');
  const { entries, itemsCount, deliveryMode, totalPrice, cart } = useContext(CartContext);
  return (
    <div className={styles['background']}>
      <div className={styles['order-summary']}>
        <h3 className={styles['order-summary__header']}>{t('components.summary.order-summary')}</h3>
        <hr className={styles['order-summary__lane']} />
        <div className={styles['order-summary__shipping']}>
          <div className={styles['order-summary__shipping-cart']}>
            <span>{t('components.summary.cart-subtotal')}</span>
            <span className={styles['order-summary--price']}>{cart?.subTotal.formattedValue}</span>
          </div>
          <div className={styles['order-summary__shipping-cart']}>
            <span>{t('components.summary.discount')}</span>
            <span className={styles['order-summary--price']}>{cart?.totalDiscounts.formattedValue}</span>
          </div>
          {deliveryMode && deliveryMode.deliveryCost && (
            <div className={styles['order-summary__shipping-rate']}>
              <span>{t('components.summary.shipping')}</span>
              <span className={styles['order-summary--price']}>{deliveryMode.deliveryCost.formattedValue}</span>
            </div>
          )}
          {deliveryMode && deliveryMode.name && <span>{deliveryMode.name}</span>}
        </div>
        <hr className={styles['order-summary__lane']} />
        <div className={styles['order-summary__total-price']}>
          <span>{t('components.summary.order-total')}</span>
          {deliveryMode && totalPrice ? (
            <span className={styles['order-summary--price']}>{cart?.totalPrice.formattedValue}</span>
          ) : (
            <span className={styles['order-summary--price']}>${totalPrice?.value}</span>
          )}
        </div>
        <AccordionItem variant="summary" name={`${itemsCount} ${t('components.summary.items-in-cart')}`}>
          <div>
            {entries !== null && entries !== undefined && entries.length > 0 ? (
              entries.map((entry) => <CheckoutProduct key={entry.entryNumber} {...entry} />)
            ) : (
              <span className={styles['cart-items-list__no-entries']}>{t('components.summary.empty')}</span>
            )}
          </div>
        </AccordionItem>
      </div>
    </div>
  );
};

OrderSummary.displayName = TAG;

export default OrderSummary;
