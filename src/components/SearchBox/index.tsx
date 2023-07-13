import { ChangeEvent, FormEvent, useState } from 'react';
import clsx from 'clsx';

import MainInput from 'components/MainInput';
import SearchButton from 'components/SearchButton';

import styles from './SearchBox.module.scss';

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setCanSubmit(value.length >= 3);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      //search service
      setInputValue('');
    }
  };

  return (
    <form onSubmit={submitHandler} className={clsx(styles['search-form'])}>
      <MainInput
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder="Search"
        className={clsx(styles['search-input'])}
      />
      <SearchButton />
    </form>
  );
};

export default SearchBox;
