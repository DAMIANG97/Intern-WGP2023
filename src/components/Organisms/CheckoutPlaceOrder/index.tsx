import React, { FunctionComponent, useContext, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { useQueryClient } from '@tanstack/react-query';
import Button from 'components/Atoms/Button';
import OrderConfirmation from 'components/Molecules/OrderConfirmation';
import OrderSummary from 'components/Molecules/OrderSummary';
import ShippingSummary from 'components/Molecules/ShippingSummary';
import UserFormModal from 'components/Molecules/UserFormsModal';
import ApplyDiscountSection from 'components/Organisms/ApplyDiscountSection';
import CheckoutPayment from 'components/Organisms/CheckoutPayment';
import { deleteCookie } from 'cookies-next';
import { lockScreen } from 'utils/lockScreen';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';

import styles from './CheckoutPlaceOrder.module.scss';

interface CheckoutPlaceOrderProps {}

const TAG = 'CheckoutPlaceOrder';

const CheckoutPlaceOrder: FunctionComponent<CheckoutPlaceOrderProps> = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('checkout');
  const { cart, clearCart } = useContext(CartContext);
  const { payment } = useContext(CheckoutContext);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const handleModalButtonClick = () => {
    lockScreen.lock();
    setIsConfirmModalOpen(true);
    deleteCookie('WGPCART');
    clearCart();
    queryClient.invalidateQueries({ queryKey: ['getNewCart'], exact: false });
    queryClient.invalidateQueries({ queryKey: ['getCart'], exact: false });
  };

  const onModalClose = () => {
    lockScreen.unlock();
    setIsConfirmModalOpen(false);
  };

  return (
    <section className={styles.container}>
      <CheckoutPayment />
      <div className={styles['bottom-section']}>
        <ApplyDiscountSection />
        <Button
          type="button"
          variant="green"
          onClick={handleModalButtonClick}
          className={styles['order-button']}
          disabled={!payment}>
          {t('components.payment.placeOrder')}
        </Button>
      </div>
      <div className={styles.wrapper}>
        <OrderSummary />
        <ShippingSummary address={cart?.deliveryAddress} deliveryMode={cart?.deliveryMode} />
      </div>
      <UserFormModal onClose={onModalClose} isOpen={isConfirmModalOpen}>
        <OrderConfirmation onClose={onModalClose} />
      </UserFormModal>
    </section>
  );
};

CheckoutPlaceOrder.displayName = TAG;

export default CheckoutPlaceOrder;
