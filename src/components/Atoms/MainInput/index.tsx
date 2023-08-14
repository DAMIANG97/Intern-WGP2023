import React, { ChangeEvent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';

import styles from './MainInput.module.scss';

interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const MainInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder, className }) => {
  const { t } = useTranslation();

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={clsx(styles['main-input'], className)}
      aria-label={t('components.search.label')}
    />
  );
};

export default MainInput;
