import React from 'react';
import styles from './SearchButton.module.scss';
import Vector from 'assets/icons/Vector.svg';
import clsx from 'clsx';

const SearchButton = (onClick: any) => (
  <button type="submit" onClick={onClick} className={clsx(styles['search-button'])}>
    <Vector />
  </button>
);
export default SearchButton;
