import React, { FunctionComponent } from 'react';

import Container from 'components/Atoms/Container';
import CartItemsList from 'components/Molecules/CartItemsList';
import ApplyDiscountSection from 'components/Organisms/ApplyDiscountSection';
import CartSummary from 'components/Organisms/CartSummary';
import Hero from 'components/Organisms/Hero';

import styles from './Cart.module.scss';

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
        <div className={styles.cartPage__layout}>
          <div>
            <CartItemsList />
            <ApplyDiscountSection />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </Container>
    </main>
  );
};

Cart.displayName = TAG;

export default Cart;
