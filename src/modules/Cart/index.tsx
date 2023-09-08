import React, { FunctionComponent } from 'react';

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
    </main>
  );
};

Cart.displayName = TAG;

export default Cart;
