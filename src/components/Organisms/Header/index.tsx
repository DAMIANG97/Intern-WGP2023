import React, { FunctionComponent, useState } from 'react';

import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import Container from 'components/Atoms/Container';
import Logo from 'components/Atoms/Logo';
import NavIcon from 'components/Atoms/NavIcon';
import Menu from 'components/Molecules/Menu';
import SearchBox from 'components/Molecules/SearchBox';
import Sidemenu from 'components/Molecules/Sidemenu';

import styles from './Header.module.scss';

interface HeaderProps {
  localeOptions: Hybris.LocaleOptions;
  menuContent: Hybris.MenuElements[];
}

const Header: FunctionComponent<HeaderProps> = ({ localeOptions, menuContent }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleSearchVisible = () => setSearchVisible((is) => !is);
  const toggleMenuVisible = () => setMenuVisible((is) => !is);

  return (
    <header className={clsx(styles.header, searchVisible && styles['header--search-visible'])}>
      <Container className={styles.header__container}>
        <div className={styles['header__menu-button']}>
          <Button
            withIcon
            type="button"
            onClick={toggleMenuVisible}
            aria-expanded={menuVisible}
            aria-controls="mobile-menu">
            <NavIcon open={menuVisible} />
          </Button>
        </div>
        <div className={styles.header__search}>
          <SearchBox />
        </div>
        <Logo />
        <Sidemenu clickHandler={toggleSearchVisible} searchVisible={searchVisible} localeOptions={localeOptions} />
        <Menu content={menuContent} visible={menuVisible} />
      </Container>
    </header>
  );
};

export default Header;
