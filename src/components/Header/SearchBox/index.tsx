import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import MainInput from 'components/Header/MainInput';
import SearchButton from 'components/Header/SearchButton';

import styles from './SearchBox.module.scss';

interface SearchBoxProps {
  toggleSearchVisible: () => void;
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({ toggleSearchVisible }) => {
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
      toggleSearchVisible();
      setInputValue('');
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
