import { ChangeEvent, FormEvent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import MainInput from 'components/Atoms/MainInput';
import SearchButton from 'components/Atoms/SearchButton';

import styles from './SearchBox.module.scss';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const { t } = useTranslation();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setCanSubmit(value.length >= 3);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      //TO DO: search handling
    }
  };

  return (
    <form onSubmit={submitHandler} className={clsx(styles['search-form'])}>
      <MainInput
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder={t('components.search.placeholder')}
        className={clsx(styles['search-input'])}
      />
      <SearchButton />
    </form>
  );
};

export default SearchBox;
