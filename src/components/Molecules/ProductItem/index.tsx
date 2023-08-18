import Image from 'next/image';
import Link from 'next/link';

import ProductPrice from 'components/Atoms/ProductPrice';
import StarsRating from 'components/Molecules/StarsRating';

import styles from './ProductItem.module.scss';

interface Product {
  key: string;
  img: string;
  url: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
}

const ProductItem = (product: Product) => {
  return (
    <div className={styles.content}>
      <Link href={product.url} className={styles.link} aria-label={product.name}>
        <div className={styles.container}>
          <Image src={product.img} className={styles.picture} width={100} height={100} alt={product.name} />
        </div>
        <div className={styles.title}> {product.name} </div>
      </Link>
      <ProductPrice>{product.price}</ProductPrice>
      <StarsRating rating={product.rating} />
    </div>
  );
};

export default ProductItem;
