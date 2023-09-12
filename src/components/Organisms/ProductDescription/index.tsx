import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import AccordionItem from 'components/Molecules/AccordionItem';

import descStyles from './ProductDescription.module.scss';

interface ProductDescriptionProps {
  product: Hybris.Product;
}

const TAG = 'Product Description';

const ProductDescription: FunctionComponent<ProductDescriptionProps> = ({ product }) => {
  const { t } = useTranslation('product');

  // Sanitizer could be used for more safety
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API#examples
  const descriptionMarkup = { __html: product.description };

  return (
    <section>
      <AccordionItem name={t('components.productDetails.description')} variant="productInfo">
        <div className={descStyles.product__descriptionContainer}>
          <p dangerouslySetInnerHTML={descriptionMarkup}></p>
        </div>
      </AccordionItem>
    </section>
  );
};

ProductDescription.displayName = TAG;

export default ProductDescription;
