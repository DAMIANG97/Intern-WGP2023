import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';

import styles from './FormErrorAlert.module.scss';

interface FormErrorAlertProps {
  name: string;
  message: string;
  className?: string;
}

const TAG = 'FormErrorAlert';

const FormErrorAlert: FunctionComponent<FormErrorAlertProps> = ({ message, name, className }) => {
  const { t } = useTranslation('checkout');
  return (
    <span
      className={clsx(styles.error, className)}
      id={`${name}-${t('components.form.field-error')}`}
      role="alert"
      aria-live="polite">
      {message}
    </span>
  );
};

FormErrorAlert.displayName = TAG;

export default FormErrorAlert;
