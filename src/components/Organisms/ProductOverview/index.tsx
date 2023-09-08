import React, { FunctionComponent, useMemo } from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import H1 from 'components/Atoms/H1';
import ProductPrice from 'components/Atoms/ProductPrice';
import AddQuantityToCart from 'components/Molecules/AddQuantityToCart';
import ProductSlider from 'components/Molecules/ProductSlider';
import StarsRating from 'components/Molecules/StarsRating';
import { DotColors, StockStatus } from 'components/Organisms/ProductOverview/enums';

import styles from './ProductOverview.module.scss';

interface ProductOverviewProps {
  product: Hybris.Product;
  linkHandler: () => void;
}
const TAG = 'ProductOverview';

const ProductOverview: FunctionComponent<ProductOverviewProps> = ({ product, linkHandler }) => {
  const { t } = useTranslation('product');

  const stock = useMemo(() => {
    switch (product.stock.stockLevelStatus) {
      case StockStatus.INSTOCK:
        return { text: t('components.productOverview.inStock'), dot: DotColors.GREEN };
      case StockStatus.LOWSTOCK:
        return { text: t('components.productOverview.lowStock'), dot: DotColors.ORANGE };
      case StockStatus.OUTOFSTOCK:
        return { text: t('components.productOverview.outOfStock'), dot: DotColors.RED };
      default:
        return { text: '', dot: '' };
    }
  }, [product.stock.stockLevelStatus, t]);
  const images = product.images.filter((image) => image.format === 'product');
  return (
    <section className={styles['product-overview']}>
      <div className={styles['product-overview__carousel']}>
        <ProductSlider images={images} />
      </div>
      <div className={styles['product-overview__informations']}>
        <H1 className={styles['product-overview__name']}>
          {product.manufacturer}&nbsp;{product.name}
        </H1>
        <div className={styles['product-overview__reviews']}>
          <StarsRating className={styles['product-overview__stars']} rating={product.averageRating} />
          <Link className={styles['product-overview__link']} href="#reviews" onClick={linkHandler}>
            {product.reviews.length}&nbsp;{t('components.productOverview.reviews')}
          </Link>
          <Link className={styles['product-overview__link']} href="#addReview" onClick={linkHandler}>
            {t('components.productOverview.addReview')}
          </Link>
        </div>
        <div className={styles['product-overview__bottom-panel']}>
          <div className={styles['product-overview__price-wrapper']}>
            <span className={styles['product-overview__text-before-price']}>
              {t('components.productOverview.textBeforePrice')}
            </span>
            <ProductPrice variant="large">{product.price.formattedValue}</ProductPrice>
          </div>
          <div className={styles['product-overview__bottom-panel-right']}>
            <div className={styles['product-overview__stock-wrapper']}>
              <span className={styles[`product-overview__dot--${stock.dot}`]} />
              <span className={styles['product-overview__stock']}>{stock.text}</span>
            </div>
            <span className={styles['product-overview__code']}>ID: {product.code}</span>
          </div>
        </div>
        <AddQuantityToCart product={product} />
      </div>
    </section>
  );
};

ProductOverview.displayName = TAG;

export default ProductOverview;
