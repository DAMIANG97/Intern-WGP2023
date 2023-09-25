import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';

import { useQuery } from '@tanstack/react-query';
import FallbackImage from 'components/Atoms/FallbackImage';
import AccordionItem from 'components/Molecules/AccordionItem';
import getSummary from 'utils/Hybris/Checkout/getSummary';
import { BASE_URL } from 'utils/Hybris/endpoints';

import styles from 'components/Molecules/CheckoutProduct/CheckoutProduct.module.scss';

const TAG = 'CheckoutProduct';

interface CheckoutProductProps extends Hybris.CartEntry {}
const CheckoutProduct: FunctionComponent<CheckoutProductProps> = (entry) => {
  const summary = useQuery(['getSummary', entry.product.code], getSummary);

  const productSummary = summary.data;
  const { t } = useTranslation('checkout');

  const cartImage = entry.product.images
    ? entry.product.images.find((image) => image.format === 'thumbnail')
    : undefined;

  return (
    <div className={styles['checkout-product']}>
      <div className={styles['product-info']}>
        <div className={styles['product-info__without-price']}>
          <div className={styles['product-info__image-background']}>
            {cartImage ? (
              <Image
                className={styles['product-info__image']}
                width={55}
                height={55}
                alt={cartImage.altText || entry.product.name}
                src={`${BASE_URL}${cartImage.url}`}
              />
            ) : (
              <FallbackImage imgAltText={t('components.fallbackImage.ariaLabel')} />
            )}
          </div>
          <div className={styles['product-info__text']}>
            <div className={styles['product-info__text-without-details']}>
              <span className={styles['product-info__text--header']}>{entry.product.name}</span>
              <span>
                {t('components.summary.quantity-short')} {entry.quantity}
              </span>
            </div>
            <AccordionItem variant="product-details" name={t('components.summary.view-details')}>
              <span>{productSummary && productSummary.summary}</span>
            </AccordionItem>
          </div>
        </div>
        <span>{entry.totalPrice.formattedValue}</span>
      </div>
    </div>
  );
};

CheckoutProduct.displayName = TAG;

export default CheckoutProduct;
