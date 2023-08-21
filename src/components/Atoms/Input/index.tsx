import React, { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  return <input ref={ref} {...props} className={clsx(styles['main-input'], props.className)} />;
});

export default Input;
