import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import StarIcon from 'assets/icons/star.svg';
import clsx from 'clsx';
import GradientStar from 'components/Atoms/GradientStar';
import range from 'lodash/range';

import styles from './StarsRating.module.scss';

interface RatingStarsProps {
  rating: number;
  className?: string;
}

const StarsRating: React.FC<RatingStarsProps> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = Number((rating - fullStars).toFixed(2));
  const decimalPercentage = decimalPart * 100;

  const starIndices = range(1, 6);

  const { t } = useTranslation();

  return (
    <div
      className={clsx(styles['rating-stars'], className)}
      aria-label={`${t('components.starsRating.rating')} : ${rating}/${starIndices.length}`}>
      {starIndices.map((index) => (
        <span
          key={index}
          className={styles.star}
          aria-label={
            index <= fullStars
              ? t('components.starsRating.fullStar')
              : index === fullStars + 1 && decimalPart > 0
              ? t('components.starsRating.partialStar')
              : t('components.starsRating.emptyStar')
          }>
          {index <= fullStars ? (
            <StarIcon className={styles.full} />
          ) : index === fullStars + 1 && decimalPart > 0 ? (
            <GradientStar decimalPercentage={decimalPercentage} />
          ) : (
            <StarIcon className={styles.gray} />
          )}
        </span>
      ))}
    </div>
  );
};

export default StarsRating;
