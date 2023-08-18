import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import StarIcon from 'assets/icons/star.svg';
import GradientStar from 'components/Atoms/GradientStar';
import { range } from 'lodash';

import styles from './StarsRating.module.scss';

interface RatingStarsProps {
  rating: number;
}

const StarsRating: React.FC<RatingStarsProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = Number((rating - fullStars).toFixed(2));
  const decimalPercentage = decimalPart * 100;

  const starIndices = range(1, 6);

  const { t } = useTranslation();

  return (
    <div
      className={styles['rating-stars']}
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
