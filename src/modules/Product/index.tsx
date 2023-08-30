import React, { FunctionComponent } from 'react';

import Container from 'components/Atoms/Container';
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
      </Container>
    </main>
  );
};

Product.displayName = TAG;

export default Product;
