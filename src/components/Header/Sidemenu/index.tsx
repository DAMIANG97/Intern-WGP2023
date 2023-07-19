import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import CartIcon from 'assets/icons/cart.svg';
import CloseIcon from 'assets/icons/close.svg';
import HeartIcon from 'assets/icons/heart.svg';
import ProfileIcon from 'assets/icons/profile.svg';
import SearchIcon from 'assets/icons/search.svg';
import clsx from 'clsx';
import Button from 'components/Button';
import CurrencySelect from 'components/CurrencySelect';
import LanguageSelect from 'components/LanguageSelect';
import { RoutePaths } from 'utils/routes';

import styles from './Sidemenu.module.scss';

interface SidemenuProps {
  clickHandler: () => void;
  searchVisible: boolean;
}

const Sidemenu: FunctionComponent<SidemenuProps> = ({ clickHandler, searchVisible }) => {
  return (
    <div className={styles.sidemenu}>
      <div className={styles['sidemenu__language-selector']}>
        <LanguageSelect theme="dark" />
      </div>
      <div className={styles['sidemenu__currency-selector']}>
        <CurrencySelect theme="dark" />
      </div>
      <div className={styles.sidemenu__search}>
        <Button type="button" className={styles['sidemenu__search']} withIcon>
          {searchVisible === true ? <CloseIcon onClick={clickHandler} /> : <SearchIcon onClick={clickHandler} />}
        </Button>
      </div>
      <Link href={RoutePaths.home} className={clsx(styles.sidemenu__heart, styles.sidemenu__link)}>
        <HeartIcon />
      </Link>
      <Link href={RoutePaths.home} className={clsx(styles.sidemenu__profile, styles.sidemenu__link)}>
        <ProfileIcon />
      </Link>
      <Link href={RoutePaths.home} className={styles.sidemenu__link}>
        <CartIcon />
      </Link>
    </div>
  );
};

export default Sidemenu;
