import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import StarsRating from 'components/Molecules/StarsRating';

import styles from './ReviewCard.module.scss';

export interface ReviewProps {
  comment: string;
  date: string;
  headline: string;
  id: string;
  principal: {
    name: string;
    uid: string;
  };
  rating: number;
}

const ReviewCard = (review: ReviewProps) => {
  const { t, lang } = useTranslation('product');
  const fullName = review.principal.name;
  const [firstName] = fullName.split(' ');

  const dateObject = new Date(review.date);

  const formattedDate = dateObject.toLocaleDateString(lang);

  return (
    <div className={styles.card}>
      <p className={styles.headline}>{review.headline}</p>
      <div className={styles.wrapper}>
        <div className={styles['rating-container']}>
          <span className={clsx(styles.text, styles['rating-text'])}>{t('components.reviewCard.rating')}</span>
          <StarsRating rating={review.rating} />
        </div>
        <div>
          <p className={clsx(styles.text, styles.description)}>{review.comment}</p>
          <p className={clsx(styles.text, styles['review-informations'])}>{`${t(
            'components.reviewCard.reviewOwner',
          )} ${firstName} ${formattedDate}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
