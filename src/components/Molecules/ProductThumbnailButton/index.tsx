import React, { FunctionComponent, MouseEvent } from 'react';
import Image from 'next/image';

import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import { BASE_URL } from 'utils/Hybris/endpoints';

import styles from './ProductThumbnailButton.module.scss';

interface ProductThumbnailButtonProps {
  image: Hybris.Image;
  currentSlide: number;
  changeSlide: (e: MouseEvent<HTMLButtonElement>) => void;
  index: number;
}

const TAG = 'ProductThumbnailButton';

const ProductThumbnailButton: FunctionComponent<ProductThumbnailButtonProps> = ({
  image,
  currentSlide,
  changeSlide,
  index,
}) => (
  <Button
    onClick={changeSlide}
    className={clsx(styles.button, currentSlide === index && styles['button--active'])}
    data-slide={index}>
    <Image src={`${BASE_URL}${image.url}`} alt={image.altText} width={76} height={76} className={styles.image} />
  </Button>
);

ProductThumbnailButton.displayName = TAG;

export default ProductThumbnailButton;
