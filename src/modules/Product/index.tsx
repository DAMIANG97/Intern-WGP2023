import React, { FunctionComponent } from 'react';

interface ProductProps {
  productId: string | string[] | undefined;
  product: Hybris.Product;
}

const TAG = 'Product';

const Product: FunctionComponent<ProductProps> = ({ productId, product }) => {
  return (
    <>
      {/* TO AVOID PIPELINE FAIL - TEMPORARY, TO BE REMOVED  */}
      <span>Product {productId}</span>
      <span>Product {product.description}</span>;
    </>
  );
};

Product.displayName = TAG;

export default Product;
