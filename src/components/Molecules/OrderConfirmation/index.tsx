import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import RedirectToHomePageButton from 'components/Atoms/RedirectToHomePageButton';

import styles from 'components/Molecules/OrderConfirmation/OrderConfirmation.module.scss';

const TAG = 'OrderConfirmation';

export const orderNumMock = '433432495453';
interface OrderConfirmationProps {
  onClose: () => void;
}

const OrderConfirmation: FunctionComponent<OrderConfirmationProps> = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className={styles['confirmation-container']}>
      <h3>{t('components.confirmation.order-success')}</h3>
      <p>{t('components.confirmation.order-number')}:</p>
      <p>{orderNumMock}</p>
      <RedirectToHomePageButton onClose={onClose} />
    </div>
  );
};

OrderConfirmation.displayName = TAG;

export default OrderConfirmation;
