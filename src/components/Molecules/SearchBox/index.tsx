import { ChangeEvent, FormEvent, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import Input from 'components/Atoms/Input';
import SearchButton from 'components/Atoms/SearchButton';
import SearchSuggestions from 'components/Molecules/SearchSuggestions';
import debounce from 'lodash.debounce';
import apiFetch from 'utils/apiFetch';
import { getSearchQuery, getSuggestionEndpoint } from 'utils/Hybris/endpoints';

import styles from './SearchBox.module.scss';

interface HybrisSuggestions {
  suggestions: {
    value: string;
  }[];
}

const SearchBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [suggestionsVisible, setSuggestionsVisible] = useState<boolean>(true);
  const { t } = useTranslation();
  const router = useRouter();
  const suggestionLimit = 5;

  const getSuggestions = async (value: string): Promise<void> => {
    debounce(async () => {
      const hybrisSuggestions: HybrisSuggestions = await apiFetch(getSuggestionEndpoint(suggestionLimit, value), {
        credentials: 'same-origin',
      });
      const hybrisSuggestionsArray = hybrisSuggestions.suggestions.map(({ value }) => value);
      setSuggestions(hybrisSuggestionsArray);
    }, 100)();
  };

  const inputChangeHandler = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length >= 3) {
      setCanSubmit(value.length >= 3);
      await getSuggestions(value);
    }
  };

  const setSuggestionInInput = async (value: string): Promise<void> => {
    setInputValue(value);
    await getSuggestions(value);
  };

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    if (canSubmit) {
      router.push(getSearchQuery(inputValue));
    }
  };
  const blurHandler = () => setSuggestionsVisible(false);
  const focusHandler = () => setSuggestionsVisible(true);

  return (
    <form onSubmit={submitHandler} className={clsx(styles['search-form'])} onBlur={blurHandler} onFocus={focusHandler}>
      <Input
        value={inputValue}
        onChange={inputChangeHandler}
        placeholder={t('components.search.placeholder')}
        className={clsx(styles['search-input'], inputValue.length >= 3 && styles['search-input--no-shadow'])}
        shouldBeVisible={false}
      />
      <SearchButton />
      <AnimateHeight
        height={inputValue.length >= 3 && suggestionsVisible ? 'auto' : 0}
        className={styles['search-suggestions']}>
        <SearchSuggestions suggestions={suggestions} setSuggestionInInput={setSuggestionInInput} />
      </AnimateHeight>
    </form>
  );
};

export default SearchBox;
