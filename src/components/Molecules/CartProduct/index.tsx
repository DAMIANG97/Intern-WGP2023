import React, { FunctionComponent, useContext } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import HeadingH3 from 'components/Atoms/HeadingH3';
import ProductPrice from 'components/Atoms/ProductPrice';
import DeleteEntryButton from 'components/Molecules/DeleteEntryButton';
import ProductQuantityInput from 'components/Molecules/ProductQuantityInput';
import { BASE_URL } from 'utils/Hybris/endpoints';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './CartProduct.module.scss';

interface CartProductProps {
  entry: Hybris.CartEntry;
}

const TAG = 'CartProduct';

const CartProduct: FunctionComponent<CartProductProps> = ({ entry }) => {
  const { user, token } = useContext(UserContext);
  const { t } = useTranslation('cart');

  const cartImage = entry.product.images.find((image) => image.format === 'thumbnail');
  return (
    <div className={styles['cart-product']}>
      <div className={styles['product-info']}>
        <div className={styles['product-info__image-background']}>
          <Image
            className={styles['product-info__image']}
            width={110}
            height={110}
            alt={cartImage?.altText || entry.product.name}
            src={`${BASE_URL}${cartImage?.url}`}
          />
        </div>
        <div className={styles['product-info__prices']}>
          <HeadingH3 className={styles['product-info__name']}>{entry.product.name}</HeadingH3>
          <div className={styles['product-info__brands']}>
            <span className={styles['product-info__brand']}>
              <span className={styles['product-info__label']}>{t('components.product.brand')}</span>
              {entry.product.manufacturer}
            </span>
            <span className={styles['product-info__brand']}>
              <span className={styles['product-info__label']}>{t('components.product.category')}</span>
              {entry.product.categories.find((category) => !category.code.includes('brand'))?.name}
            </span>
          </div>
        </div>
      </div>
      <div className={styles['product-price']}>
        <div className={styles['product-price__wrapper']}>
          <span className={styles['product-price__description']}>{t('components.product.price')}</span>
          <ProductPrice variant="cart">{entry.basePrice.formattedValue}</ProductPrice>
        </div>
        <ProductQuantityInput entry={entry} user={user} token={token} />
        <div className={styles['product-price__wrapper']}>
          <span className={styles['product-price__description']}>{t('components.product.subtotal')}</span>
          <ProductPrice variant="cart">{entry.totalPrice.formattedValue}</ProductPrice>
        </div>
        <DeleteEntryButton
          user={user}
          entryNumber={entry.entryNumber}
          token={token}
          className={styles['product-price__delete-button']}
        />
      </div>
    </div>
  );
};

CartProduct.displayName = TAG;

export default CartProduct;
