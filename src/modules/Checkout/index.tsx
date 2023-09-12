import React from 'react';

import Container from 'components/Atoms/Container';
import Breadcrumb from 'components/Organisms/Breadcrumb';
import CheckoutForm from 'components/Organisms/CheckoutForm';

import styles from './Checkout.module.scss';

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <Container>
      <Breadcrumb variant="dark" />
      <main className={styles.content}>
        <CheckoutForm />
      </main>
    </Container>
  );
};

export default Checkout;
