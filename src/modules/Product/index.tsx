import React, { FunctionComponent } from 'react';

import Container from 'components/Atoms/Container';
import ProductDescription from 'components/Organisms/ProductDescription';
import ProductDetails from 'components/Organisms/ProductDetails';
import ProductOverview from 'components/Organisms/ProductOverview';

interface ProductProps {
  product: Hybris.Product;
}

const TAG = 'Product';

const Product: FunctionComponent<ProductProps> = ({ product }) => {
  return (
    <main>
      <Container>
        <ProductOverview product={product} />
        <ProductDescription product={product} />
        <ProductDetails product={product} />
      </Container>
    </main>
  );
};

Product.displayName = TAG;

export default Product;
