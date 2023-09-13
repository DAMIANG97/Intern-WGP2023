import React from 'react';

import CheckMark from 'assets/icons/checkMark.svg';
import clsx from 'clsx';

import styles from './CheckoutNavigationStep.module.scss';

interface CheckoutNavigationStepProps {
  stepNumber: number;
  stepName: string;
  isActive: boolean;
  isDone: boolean;
  setActive: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CheckoutNavigationStep: React.FC<CheckoutNavigationStepProps> = ({
  stepNumber,
  stepName,
  isActive,
  isDone,
  setActive,
}) => {
  return (
    <button
      className={clsx(styles.container, (isActive || isDone) && styles['container--active'])}
      onClick={setActive}
      type="button">
      <div className={styles.circle}>{isDone ? <CheckMark /> : stepNumber}</div>
      <div className={styles.name}>{stepName}</div>
    </button>
  );
};

export default CheckoutNavigationStep;
