import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import AccordionItem from 'components/Molecules/AccordionItem';

import styles from './ProductDetails.module.scss';

interface ProductDetailsProps {
  product: Hybris.Product;
}

const TAG = 'Product Details';

const ProductDetails: FunctionComponent<ProductDetailsProps> = ({ product }) => {
  const { t } = useTranslation('product');
  return (
    <section>
      <AccordionItem name={t('components.productDetails.details')} variant="productInfo">
        <div>
          {product.classifications.map((classification) => {
            const { code, features, name } = classification;
            return (
              <div className={styles.product__accordionDetails__container} key={code}>
                <h2 className={styles.product__accordionDetails__classificationName}> {name}</h2>
                {features.map((feature) => {
                  return (
                    <div className={styles.product__accordionDetails__contentContainer} key={feature.code}>
                      <div className={styles.product__accordionDetails__title}>{feature.name}</div>
                      <div className={styles.product__accordionDetails__content}>
                        {feature.featureValues.map((featureValue) => featureValue.value)}
                        {feature.featureUnit.symbol}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </AccordionItem>
    </section>
  );
};

ProductDetails.displayName = TAG;

export default ProductDetails;
