import React, { FunctionComponent } from 'react';

import Container from 'components/Atoms/Container';
import ApplyDiscountSection from 'components/Organisms/ApplyDiscountSection';
import Hero from 'components/Organisms/Hero';

interface CartProps {
  heroContent: Hybris.HeroComponentSearchProps;
  title: string;
}

const TAG = 'Cart';
const Cart: FunctionComponent<CartProps> = ({ heroContent, title }) => {
  return (
    <main>
      <Hero heroContent={heroContent} categoryId={title} />
      <Container>
        <ApplyDiscountSection />
      </Container>
    </main>
  );
};

Cart.displayName = TAG;

export default Cart;
