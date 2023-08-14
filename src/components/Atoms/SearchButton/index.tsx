import React from 'react';

import Vector from 'assets/icons/Vector.svg';
import clsx from 'clsx';

import styles from './SearchButton.module.scss';

const SearchButton = () => (
  <button type="submit" className={clsx(styles['search-button'])}>
    <Vector />
  </button>
);
export default SearchButton;
