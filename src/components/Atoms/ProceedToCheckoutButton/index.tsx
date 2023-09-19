import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import LinkComponent from 'components/Atoms/LinkComponent';
import { RoutePaths } from 'utils/routes';

import styles from './ProceedToCheckoutButton.module.scss';

const TAG = 'Proceed To Checkout Button';
const ProceedToCheckoutButton: FunctionComponent = () => {
  const { t } = useTranslation('cart');
  return (
    <LinkComponent href={RoutePaths.checkout} className={styles.proceedToCheckout__button}>
      {t('components.cart.proceedToCheckout')}
    </LinkComponent>
  );
};
ProceedToCheckoutButton.displayName = TAG;
export default ProceedToCheckoutButton;
