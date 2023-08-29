import ProductItem from 'components/Molecules/ProductItem';

interface ProductItemListProps {
  className: string;
  products: ReadonlyArray<Hybris.FilteredProduct>;
}

const ProductItemsList: React.FC<ProductItemListProps> = ({ className, products }) => {
  return (
    <div className={className}>
      {products.map((product) => (
        <ProductItem key={product.code} {...product} />
      ))}
    </div>
  );
};

export default ProductItemsList;
