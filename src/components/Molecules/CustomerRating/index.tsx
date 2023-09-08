import { FunctionComponent } from 'react';

import EmptyStar from 'assets/icons/emptyStar.svg';
import clsx from 'clsx';
import range from 'lodash/range';

import styles from './CustomerRating.module.scss';

interface CustomerRatingProps {
  rating: number;
  onRatingChange: (newRating: number) => void;
  invalidClass?: string;
}
const numberOfStars = range(1, 6);

const CustomerRating: FunctionComponent<CustomerRatingProps> = ({ rating, onRatingChange }) => {
  const handleStarClick = (clickedRating: number) => () => {
    onRatingChange(clickedRating);
  };
  return (
    <div className={clsx(styles['stars-container'])}>
      {numberOfStars.map((number) => (
        <button key={number} onClick={handleStarClick(number)} type="button" className={clsx(styles['star-btn'])}>
          <EmptyStar className={number <= rating ? styles['filled-star'] : styles.star} />
        </button>
      ))}
    </div>
  );
};

export default CustomerRating;
