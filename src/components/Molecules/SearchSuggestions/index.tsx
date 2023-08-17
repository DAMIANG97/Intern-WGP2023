import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import { getSearchQuery } from 'utils/Hybris/endpoints';

import styles from './SearchSuggestions.module.scss';

interface SearchSuggestionsProps {
  suggestions: string[];
  setSuggestionInInput: (value: string) => void;
}
const TAG = 'SearchSuggestions';

const SearchSuggestions: FunctionComponent<SearchSuggestionsProps> = ({ suggestions, setSuggestionInInput }) => (
  <ul className={styles['search-suggestions']}>
    {suggestions.map((suggestion, index) => (
      <li key={index} className={styles['search-suggestions__item']}>
        <Link
          className={styles['search-link']}
          href={getSearchQuery(suggestion)}
          onClick={() => setSuggestionInInput(suggestion)}>
          {suggestion}
        </Link>
      </li>
    ))}
  </ul>
);

SearchSuggestions.displayName = TAG;

export default SearchSuggestions;
