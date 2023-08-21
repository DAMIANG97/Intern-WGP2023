import React, { FunctionComponent } from 'react';

import ArrowRight from 'assets/icons/arrowRight.svg';
import Button from 'components/Atoms/Button';

import styles from './ArrowButton.module.scss';

const TAG = 'ArrowButton';

const ArrowButton: FunctionComponent = () => {
  return (
    <Button type="submit" className={styles['arrowButton']}>
      <ArrowRight />
    </Button>
  );
};
ArrowButton.displayName = TAG;
export default ArrowButton;
