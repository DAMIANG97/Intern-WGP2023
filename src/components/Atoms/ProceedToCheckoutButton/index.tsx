import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Button from 'components/Atoms/Button';
import LinkComponent from 'components/Atoms/LinkComponent';
import { RoutePaths } from 'utils/routes';

import styles from './ProceedToCheckoutButton.module.scss';

interface ProceedToCheckoutButtonProps {
  disabled: boolean;
}
const TAG = 'Proceed To Checkout Button';
const ProceedToCheckoutButton: FunctionComponent<ProceedToCheckoutButtonProps> = ({ disabled }) => {
  const { t } = useTranslation('cart');

  return (
    <>
      {disabled ? (
        <Button type="button" className={styles.proceedToCheckout__button} disabled>
          {t('components.cart.proceedToCheckout')}
        </Button>
      ) : (
        <LinkComponent href={RoutePaths.checkout} className={styles.proceedToCheckout__button}>
          {t('components.cart.proceedToCheckout')}
        </LinkComponent>
      )}
    </>
  );
};
ProceedToCheckoutButton.displayName = TAG;
export default ProceedToCheckoutButton;
