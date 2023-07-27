import React, { FunctionComponent, useState } from 'react';

import MenuIcon from 'assets/icons/menu.svg';
import clsx from 'clsx';
import Button from 'components/Button';
import Container from 'components/Container';
import Logo from 'components/Header/Logo';
import SearchBox from 'components/Header/SearchBox';
import Sidemenu from 'components/Header/Sidemenu';
import ListOfLinks from 'components/ListOfLinks';

import styles from './Header.module.scss';

interface HeaderProps extends Hybris.PageContent {}

const Header: FunctionComponent<HeaderProps> = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const toggleSearchVisible = () => setSearchVisible((is) => !is);
  const clickHandler = () => {
    toggleSearchVisible();
  };
  return (
    <header className={clsx(styles.header, searchVisible && styles['header--search-visible'])}>
      <Container className={styles.header__container}>
        <div className={styles['header__menu-button']}>
          <Button withIcon type="button">
            <MenuIcon />
          </Button>
        </div>
        <div className={styles.header__search}>
          <SearchBox />
        </div>
        <Logo />
        <Sidemenu clickHandler={clickHandler} searchVisible={searchVisible} />
        <div className={styles.header__menu}>
          <ListOfLinks />
        </div>
      </Container>
    </header>
  );
};

export default Header;
