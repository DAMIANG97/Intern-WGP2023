import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import LinkComponent from 'components/Atoms/LinkComponent';
import { RoutePaths } from 'utils/routes';

import styles from './RedirectToHomePageButton.module.scss';

const TAG = 'Proceed To Checkout Button';
interface RedirectToHomePageProps {
  onClose: () => void;
}
const RedirectToHomePageButton: FunctionComponent<RedirectToHomePageProps> = ({ onClose }) => {
  const { t } = useTranslation();
  return (
    <LinkComponent href={RoutePaths.home} onClick={onClose} className={styles.proceedToHomePage__button}>
      {t('components.confirmation.proceed-to-home-page')}
    </LinkComponent>
  );
};
RedirectToHomePageButton.displayName = TAG;
export default RedirectToHomePageButton;
