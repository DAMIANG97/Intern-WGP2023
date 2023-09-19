import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from './OrderTotalSummary.module.scss';

export interface OrderTotalSummary {
  subTotal: React.ReactNode;
  total: React.ReactNode;
}

const OrderTotalSummary = ({ subTotal, total }: OrderTotalSummary) => {
  const { t } = useTranslation('cart');

  return (
    <div className={styles.orderTotal__container}>
      <dl className={styles.orderTotal__totalDetails}>
        <div className={styles.orderTotal__row}>
          <dt className={styles.orderTotal__content}>{t('components.cart.subTotal')}</dt>
          <dd className={styles.orderTotal__content}>{subTotal}</dd>
        </div>
        <div className={styles.orderTotal__totalSummary}>
          <dt className={styles.orderTotal__totalRow}>{t('components.cart.orderTotal')}</dt>
          <dd className={styles.orderTotal__totalRow}>{total}</dd>
        </div>
      </dl>
    </div>
  );
};

export default OrderTotalSummary;
