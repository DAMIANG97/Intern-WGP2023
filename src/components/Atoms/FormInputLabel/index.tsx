import React, { FunctionComponent, ReactNode } from 'react';

import styles from './FormInputLabel.module.scss';

interface FormInputLabelProps {
  required: boolean;
  children: ReactNode;
  name: string;
}

const TAG = 'FormInputLabel';

const FormInputLabel: FunctionComponent<FormInputLabelProps> = ({ required, children, name }) => {
  return (
    <label className={styles.label}>
      <p>
        {name}
        {required && (
          <span className={styles.star} aria-label="Required">
            &nbsp;*
          </span>
        )}
      </p>
      {children}
    </label>
  );
};

FormInputLabel.displayName = TAG;

export default FormInputLabel;
