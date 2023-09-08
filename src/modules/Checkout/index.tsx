import React from 'react';

import Container from 'components/Atoms/Container';
import Breadcrumb from 'components/Organisms/Breadcrumb';

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
  return (
    <Container>
      <Breadcrumb />
      <span>Checkout Page</span>
    </Container>
  );
};

export default Checkout;
