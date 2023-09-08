import React, { FunctionComponent, useState } from 'react';

import Container from 'components/Atoms/Container';
import ProductDescription from 'components/Organisms/ProductDescription';
import ProductDetails from 'components/Organisms/ProductDetails';
import ProductOverview from 'components/Organisms/ProductOverview';
import ProductReview from 'components/Organisms/ProductReview';

import styles from './Product.module.scss';

interface ProductProps {
  product: Hybris.Product;
}

const TAG = 'Product';

const Product: FunctionComponent<ProductProps> = ({ product }) => {
  const [linkStatus, setLinkStatus] = useState(false);

  const linkHandler = () => {
    setLinkStatus(true);
  };

  return (
    <main>
      <Container className={styles.container}>
        <ProductOverview product={product} linkHandler={linkHandler} />
        <ProductDescription product={product} />
        <ProductDetails product={product} />
        <ProductReview
          reviews={product.reviews}
          productName={product.name}
          productManufacturer={product.manufacturer}
          productCode={product.code}
          linkStatus={linkStatus}
          linkHandler={setLinkStatus}
        />
      </Container>
    </main>
  );
};

Product.displayName = TAG;

export default Product;
