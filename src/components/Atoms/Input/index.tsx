import React, { forwardRef } from 'react';

import clsx from 'clsx';

import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  inputClassName?: string;
  shouldBeVisible?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  return (
    <div className={styles.input__container}>
      {props.shouldBeVisible ? (
        <label htmlFor={props.id} className={clsx(styles['main-label--hidde-text'], styles['main-label'])}>
          {props.text}
        </label>
      ) : (
        <label htmlFor={props.id} className={clsx(styles['main-label'])}>
          {props.text}
        </label>
      )}

      <input ref={ref} {...props} className={clsx(styles['main-input'], props.className)} />
    </div>
  );
});

export default Input;
