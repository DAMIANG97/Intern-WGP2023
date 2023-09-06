import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import styles from './Button.module.scss';

type ButtonVariant = 'green' | 'button' | 'button--with-icon';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
}

const Button: FunctionComponent<ButtonProps> = ({ children, className, variant = 'button', ...props }) => {
  return (
    <button type="button" className={clsx(styles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
