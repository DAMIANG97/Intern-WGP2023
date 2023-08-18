import styles from './ProductPrice.module.scss';

interface ProductPriceProps {
  children: string;
}

const ProductPrice = (props: ProductPriceProps) => {
  return <div className={styles.price}>{props.children}</div>;
};

export default ProductPrice;
