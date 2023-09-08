import React, { ChangeEvent, FunctionComponent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { useMutation } from '@tanstack/react-query';
import Minus from 'assets/icons/minus.svg';
import Plus from 'assets/icons/plus.svg';
import Button from 'components/Atoms/Button';
import SmallLoader from 'components/Atoms/SmallLoader';
import { StockStatus } from 'components/Organisms/ProductOverview/enums';
import debounce from 'lodash.debounce';
import changeQuantity from 'utils/Hybris/Cart/changeQuantity';

import styles from './ProductQuantityInput.module.scss';

interface ProductQuantityInputProps {
  entry: Hybris.CartEntry;
  cartGUID: string;
  userId: string;
}

const TAG = 'ProductQuantityInput';
const maxQuantityWithLowStock = 2;

const ProductQuantityInput: FunctionComponent<ProductQuantityInputProps> = ({ entry, cartGUID, userId }) => {
  const [quantity, setQuantity] = useState(entry.quantity);
  const { mutate, isLoading } = useMutation(changeQuantity);
  const { t } = useTranslation('cart');

  const setAndPostQuantity = (number: number) => {
    setQuantity(number);
    debounce(() => {
      const params = { userId: userId, cartId: cartGUID, entryNumber: entry.entryNumber };
      const body = { quantity: number };
      mutate({ params: params, body: body });
    }, 250)();
  };

  const addProduct = () => setAndPostQuantity(quantity + 1);
  const removeProduct = () => setAndPostQuantity(quantity - 1);
  const changeProductCount = (e: ChangeEvent<HTMLInputElement>) => setAndPostQuantity(Number(e.target.value));

  return (
    <div className={styles.container}>
      <label htmlFor="quantity" className={styles.label}>
        {t('components.product.quantityShort')}
      </label>
      <div className={styles.wrapper}>
        <Button
          type="button"
          variant="button--with-icon"
          className={styles.button}
          onClick={removeProduct}
          disabled={quantity === (1 || 0)}>
          <Minus />
        </Button>
        {isLoading ? (
          <div className={styles.loader}>
            <SmallLoader />
          </div>
        ) : (
          <input
            className={styles.input}
            type="number"
            name="Product §quantity"
            id="quantity"
            max={entry.product.stock.stockLevel}
            min="0"
            value={quantity}
            onChange={changeProductCount}
          />
        )}
        <Button
          type="button"
          variant="button--with-icon"
          className={styles.button}
          onClick={addProduct}
          disabled={
            quantity === entry.product.stock.stockLevel ||
            (entry.product.stock.stockLevelStatus === StockStatus.LOWSTOCK && quantity === maxQuantityWithLowStock)
          }>
          <Plus />
        </Button>
      </div>
    </div>
  );
};

ProductQuantityInput.displayName = TAG;

export default ProductQuantityInput;
