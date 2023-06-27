import React, { FunctionComponent } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return (
    <button type="button" className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
