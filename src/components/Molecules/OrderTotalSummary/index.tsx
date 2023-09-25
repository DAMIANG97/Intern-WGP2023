import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import styles from './OrderTotalSummary.module.scss';

export interface OrderTotalSummaryProps {
  subTotal: string;
  total: string;
  tax: string;
  discounts: string;
  delivery: string;
}

const OrderTotalSummary: FunctionComponent<OrderTotalSummaryProps> = ({
  subTotal,
  total,
  tax,
  discounts,
  delivery,
}) => {
  const { t } = useTranslation('cart');

  const totals = [
    { label: t('components.cart.discounts'), value: discounts },
    { label: t('components.cart.subTotal'), value: subTotal },
    { label: t('components.cart.tax'), value: tax },
    { label: t('components.cart.delivery'), value: delivery },
  ];

  return (
    <div className={styles.orderTotal__container}>
      <dl className={styles.orderTotal__totalDetails}>
        {totals.map((total) => (
          <div key={total.label} className={styles.orderTotal__row}>
            <dt className={styles.orderTotal__content}>{total.label}</dt>
            <dd className={styles.orderTotal__content}>{total.value}</dd>
          </div>
        ))}
        <div className={styles.orderTotal__totalSummary}>
          <dt className={styles.orderTotal__totalRow}>{t('components.cart.orderTotal')}</dt>
          <dd className={styles.orderTotal__totalRow}>{total}</dd>
        </div>
      </dl>
    </div>
  );
};

export default OrderTotalSummary;
