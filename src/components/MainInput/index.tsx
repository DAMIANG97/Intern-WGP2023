import React, { ChangeEvent } from 'react';
import styles from './MainInput.module.scss';
import clsx from 'clsx';

interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const MainInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(styles['main-input'], className)}
    />
  );
};

export default MainInput;
