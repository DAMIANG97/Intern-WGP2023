import React, { FunctionComponent, MouseEvent, useCallback, useMemo } from 'react';

import setCarousel from 'components/Molecules/ProductSliderCustomControls/setCarousel';
import ProductThumbnailButton from 'components/Molecules/ProductThumbnailButton';
import Carousel from 'nuka-carousel';
import useBreakpoints from 'utils/Hooks/useBreakpoints';

import styles from './ProductSliderCustomControls.module.scss';

interface ProductSliderCustomControlsProps {
  goToSlide: (targetIndex: number) => void;
  currentSlide: number;
  images: Hybris.Image[];
}

const TAG = 'ProductSliderCustomControls';

const ProductSliderCustomControls: FunctionComponent<ProductSliderCustomControlsProps> = ({
  goToSlide,
  currentSlide,
  images,
}) => {
  const breakpoint = useBreakpoints();
  const changeSlide = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      goToSlide(Number(e.currentTarget.dataset.slide));
    },
    [goToSlide],
  );

  const settings = useMemo(() => {
    return setCarousel(breakpoint);
  }, [breakpoint]);

  return (
    <div className={styles.container}>
      <Carousel {...settings}>
        {images.map((image, index) => (
          <ProductThumbnailButton
            key={index}
            image={image}
            currentSlide={currentSlide}
            changeSlide={changeSlide}
            index={index}
          />
        ))}
      </Carousel>
    </div>
  );
};

ProductSliderCustomControls.displayName = TAG;

export default ProductSliderCustomControls;
