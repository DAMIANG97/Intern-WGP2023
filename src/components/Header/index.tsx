import React, { useState } from 'react';

import MenuIcon from 'assets/icons/menu.svg';
import clsx from 'clsx';
import Button from 'components/Button';
import Logo from 'components/Header/Logo';
import SearchBox from 'components/Header/SearchBox';
import Sidemenu from 'components/Header/Sidemenu';

import styles from './Header.module.scss';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearchVisible = () => setSearchVisible((is) => !is);
  const clickHandler = () => {
    toggleSearchVisible();
  };

  return (
    <header className={clsx(styles.header, searchVisible && styles['header--search-visible'])}>
      <div className={styles['header__menu-button']}>
        <Button withIcon type="button">
          <MenuIcon />
        </Button>
      </div>
      <div className={styles.header__search}>
        <SearchBox toggleSearchVisible={toggleSearchVisible} />
      </div>
      <Logo />
      <Sidemenu clickHandler={clickHandler} searchVisible={searchVisible} />
      <div className={styles.header__menu}>menu</div>
      {/* TODO */}
    </header>
  );
};

export default Header;
