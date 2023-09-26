import React from 'react';

import Container from 'components/Atoms/Container';
import CheckoutNavigation from 'components/Molecules/CheckoutNavigation';
import OrderSummary from 'components/Molecules/OrderSummary';
import Breadcrumb from 'components/Organisms/Breadcrumb';
import CheckoutForm from 'components/Organisms/CheckoutForm';
import CheckoutPlaceOrder from 'components/Organisms/CheckoutPlaceOrder';

import styles from './Checkout.module.scss';

//TO DO remove it while connection navigation to steps
const steps = [
  {
    title: 'Login',
  },
  {
    title: 'Create Account',
  },
  {
    title: 'Delivery',
  },
];

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <Container>
      <Breadcrumb hideOnMobile variant="dark" />
      <CheckoutNavigation steps={steps} />
      <main className={styles.content}>
        <CheckoutForm />
        <OrderSummary />
        <CheckoutPlaceOrder />
      </main>
    </Container>
  );
};

export default Checkout;
