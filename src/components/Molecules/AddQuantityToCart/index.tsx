import React, { FunctionComponent, useContext, useId, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { useMutation } from '@tanstack/react-query';
import Button from 'components/Atoms/Button';
import addToCart from 'utils/Hybris/postQuantityToCart';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from 'components/Molecules/AddQuantityToCart/AddQuantityToCart.module.scss';

interface AddQuantityToCartProps {
  product: Hybris.Product;
}

const TAG = 'AddQuantityToCart';

const AddQuantityToCart: FunctionComponent<AddQuantityToCartProps> = ({ product }) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => setQuantity(quantity - 1);
  const handleIncrement = () => setQuantity(quantity + 1);
  const disableAddToCart = product.stock.stockLevelStatus === 'outOfStock';

  const { cartRefresh, cartGUID } = useContext(CartContext);
  const { user, token } = useContext(UserContext);
  const data = {
    user: user,
    token: token,
    guid: cartGUID,
    quantity: quantity,
    product: {
      code: product.code,
    },
  };

  const { mutate, isLoading, isError } = useMutation(addToCart);

  const handleAddToCart = () => {
    mutate(data, {
      onSuccess: () => {
        cartRefresh();
      },
    });
  };
  const id = useId();

  return (
    <div className={styles.addQuantityToCart}>
      <div className={styles['quantitySection']}>
        <span className={styles['quantitySection__text']}>{t('components.addQuantityToCart.quantity')}</span>
        <div className={styles['quantitySection__plus-minus']}>
          <Button
            aria-controls={id}
            aria-label={t('components.addQuantityToCart.decrement')}
            onClick={handleDecrement}
            disabled={quantity <= 1}
            variant="button--with-icon">
            <span>-</span>
          </Button>
          <span id={id}>{quantity}</span>
          <Button
            aria-controls={id}
            aria-label={t('components.addQuantityToCart.increment')}
            onClick={handleIncrement}
            disabled={
              quantity >= product.stock.stockLevel ||
              (product.stock.stockLevelStatus === 'lowStock' && quantity >= 2) ||
              (product.stock.stockLevelStatus === 'outOfStock' && quantity >= 1)
            }
            variant="button--with-icon">
            <span>+</span>
          </Button>
        </div>
      </div>
      <Button onClick={handleAddToCart} disabled={disableAddToCart || isLoading} variant="green">
        {isLoading ? t('components.addQuantityToCart.adding') : t('components.addQuantityToCart.addToCart')}
      </Button>
      {isError && <div className={styles['addQuantityToCart__error']}>{t('components.addQuantityToCart.error')}</div>}
    </div>
  );
};

AddQuantityToCart.displayName = TAG;

export default AddQuantityToCart;
