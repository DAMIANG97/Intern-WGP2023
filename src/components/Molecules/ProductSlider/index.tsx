import React, { FunctionComponent } from 'react';
import Image from 'next/image';

import Arrow from 'assets/icons/arrowSlider.svg';
import ProductSliderCustomControls from 'components/Molecules/ProductSliderCustomControls';
import Carousel, { ControlProps } from 'nuka-carousel';
import { BASE_URL } from 'utils/Hybris/endpoints';

import styles from './ProductSlider.module.scss';

const CAROUSEL_OPTIONS = {
  defaultControlsConfig: {
    prevButtonClassName: styles['carousel__button--left'],
    prevButtonStyle: {
      color: undefined,
      background: 'none',
      border: 'none',
      padding: 0,
    },
    prevButtonText: <Arrow />,
    nextButtonClassName: styles['carousel__button'],
    nextButtonStyle: {
      color: undefined,
      background: 'none',
      border: 'none',
      padding: 0,
    },
    nextButtonText: <Arrow />,
    pagingDotsStyle: { fill: undefined, opacity: 1 },
    pagingDotsClassName: styles['carousel__dots'],
    pagingDotsContainerClassName: styles['carousel__dots-container'],
  },

  wrapAround: true,
  autoplayInterval: 5000,
  speed: 1000,
};
interface ProductSliderProps {
  images: Hybris.Image[];
}

const TAG = 'ProductSlider';

const ProductSlider: FunctionComponent<ProductSliderProps> = ({ images }) => (
  <Carousel
    {...CAROUSEL_OPTIONS}
    renderBottomLeftControls={(props: ControlProps) => (
      <ProductSliderCustomControls goToSlide={props.goToSlide} currentSlide={props.currentSlide} images={images} />
    )}>
    {images.map((image, index) => (
      <div key={index} className={styles['carousel__container']}>
        <Image
          className={styles['carousel__image']}
          width={515}
          height={515}
          alt={image.altText}
          src={`${BASE_URL}${image.url}`}
        />
      </div>
    ))}
  </Carousel>
);

ProductSlider.displayName = TAG;

export default ProductSlider;
