import React, { FunctionComponent, useContext, useState } from 'react';
import AnimateHeight from 'react-animate-height';

import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import Container from 'components/Atoms/Container';
import Logo from 'components/Atoms/Logo';
import NavIcon from 'components/Atoms/NavIcon';
import Menu from 'components/Molecules/Menu';
import SearchBox from 'components/Molecules/SearchBox';
import Sidemenu from 'components/Molecules/Sidemenu';
import UserFormModal from 'components/Molecules/UserFormsModal';
import CreateAccountForm from 'components/Organisms/CreateAccountForm';
import LoginForm from 'components/Organisms/LoginForm';
import { lockScreen } from 'utils/lockScreen';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './Header.module.scss';

interface HeaderProps {
  localeOptions: Hybris.LocaleOptions;
  menuContent: Hybris.MenuElements[];
}

const Header: FunctionComponent<HeaderProps> = ({ localeOptions, menuContent }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const { authStatus } = useContext(UserContext);
  const { userStatus } = authStatus;
  const toggleSearchVisible = () => {
    setSearchVisible((is) => !is);
    setMenuVisible(false);
  };
  const toggleMenuVisible = () => {
    setMenuVisible((is) => !is);
    setSearchVisible(false);
  };

  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const handleProfileClick = () => {
    if (userStatus !== 'loggedIn') {
      lockScreen.lock();
      setIsAccountModalOpen(true);
    }
  };

  const onModalClose = () => {
    lockScreen.unlock();
    setIsAccountModalOpen(false);
  };

  return (
    <header className={clsx(styles.header, searchVisible && styles['header--search-visible'])}>
      <Container className={styles.header__container}>
        <div className={styles['header__menu-button']}>
          <Button
            variant="button--with-icon"
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

        <AnimateHeight height={searchVisible ? 'auto' : 0} className={styles['header__mobile-search']}>
          <SearchBox />
        </AnimateHeight>

        <Logo />
        <Sidemenu
          clickHandler={toggleSearchVisible}
          searchVisible={searchVisible}
          localeOptions={localeOptions}
          profileClickHandler={handleProfileClick}
        />
        <Menu content={menuContent} visible={menuVisible} />
        <UserFormModal isOpen={isAccountModalOpen} onClose={onModalClose}>
          <CreateAccountForm />
          <LoginForm />
        </UserFormModal>
      </Container>
    </header>
  );
};

export default Header;
