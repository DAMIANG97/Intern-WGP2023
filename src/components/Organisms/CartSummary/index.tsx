import React, { FunctionComponent, useContext } from 'react';
import useTranslation from 'next-translate/useTranslation';

import ProceedToCheckoutButton from 'components/Atoms/ProceedToCheckoutButton';
import AccordionItem from 'components/Molecules/AccordionItem';
import DeliveryModeForm from 'components/Molecules/DeliveryModeForm';
import OrderTotalSummary from 'components/Molecules/OrderTotalSummary';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';

import styles from './CartSummary.module.scss';

const TAG = 'Cart Summary Section';

const CartSummary: FunctionComponent = () => {
  const { t } = useTranslation();
  const { cart } = useContext(CartContext);
  const { deliveryModes } = useContext(CheckoutContext);

  return (
    <section className={styles.summary__container}>
      <h3 className={styles.summary__title}>{t('cart:components.cart.summaryTitle')}</h3>
      {deliveryModes ? (
        <AccordionItem
          name={t('cart:components.cart.summaryAccordionTitle')}
          variant="discount"
          modifierClassName={styles.summary__name}>
          <DeliveryModeForm />
        </AccordionItem>
      ) : null}

      <OrderTotalSummary
        subTotal={cart?.subTotal.formattedValue ?? ''}
        total={cart?.totalPriceWithTax.formattedValue ?? ''}
        tax={cart?.totalTax.formattedValue ?? '0'}
        discounts={cart?.totalDiscounts.formattedValue ?? '0'}
        delivery={cart?.deliveryCost?.formattedValue ?? '0'}
      />
      <ProceedToCheckoutButton disabled={cart?.totalItems === 0} />
    </section>
  );
};

CartSummary.displayName = TAG;

export default CartSummary;
