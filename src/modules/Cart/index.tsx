import React, { FunctionComponent } from 'react';

import Container from 'components/Atoms/Container';
import CartItemsList from 'components/Molecules/CartItemsList';
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
        <CartItemsList />
        <ApplyDiscountSection />
      </Container>
    </main>
  );
};

Cart.displayName = TAG;

export default Cart;
