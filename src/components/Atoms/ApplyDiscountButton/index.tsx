import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Button from 'components/Atoms/Button';

import styles from './ApplyDiscountButton.module.scss';

const TAG = 'Apply Discount Button';
const ApplyDiscountButton: FunctionComponent = () => {
  const { t } = useTranslation();
  return (
    <Button type="submit" className={styles.applyDiscount__button}>
      {t('components.cart.applyDiscountButton')}
    </Button>
  );
};
ApplyDiscountButton.displayName = TAG;
export default ApplyDiscountButton;
