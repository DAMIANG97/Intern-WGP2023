import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import FallbackImage from 'components/Atoms/FallbackImage';
import ProductPrice from 'components/Atoms/ProductPrice';
import StarsRating from 'components/Molecules/StarsRating';

import styles from './ProductItem.module.scss';

interface ProductItemProps extends Hybris.FilteredProduct {}

const ProductItem: React.FC<ProductItemProps> = ({ url, name, image, price, rating }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.content}>
      <Link href={url} className={styles.link} aria-label={name}>
        <div className={styles.container}>
          {image ? (
            <Image src={image} className={styles.picture} width={100} height={100} alt={name} />
          ) : (
            <FallbackImage imgAltText={t('components.fallbackImage.ariaLabel')} />
          )}
        </div>
        <div className={styles.title}> {name} </div>

        <ProductPrice>{price}</ProductPrice>
        <div className={styles.stars}>{rating && <StarsRating rating={rating} className={styles.price} />}</div>
      </Link>
    </div>
  );
};

export default ProductItem;
