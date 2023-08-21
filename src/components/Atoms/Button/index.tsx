import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  withIcon?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ children, withIcon, className, ...props }) => {
  return (
    <button className={clsx(styles.button, withIcon && styles['button--with-icon'], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
