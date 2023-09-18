import React, { FunctionComponent, useContext } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import CartIcon from 'assets/icons/cart.svg';
import CloseIcon from 'assets/icons/close.svg';
import HeartIcon from 'assets/icons/heart.svg';
import ProfileIcon from 'assets/icons/profile.svg';
import SearchIcon from 'assets/icons/search.svg';
import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import CurrencySelect from 'components/Molecules/CurrencySelect';
import LanguageSelect from 'components/Molecules/LanguageSelect';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { RoutePaths } from 'utils/routes';

import styles from './Sidemenu.module.scss';

const ThemeSelect = dynamic(() => import('components/Organisms/ThemeSelect'), { ssr: false });

interface SidemenuProps {
  clickHandler: () => void;
  profileClickHandler: () => void;
  searchVisible: boolean;
  localeOptions: Hybris.LocaleOptions;
}

const Sidemenu: FunctionComponent<SidemenuProps> = ({
  clickHandler,
  searchVisible,
  localeOptions,
  profileClickHandler,
}) => {
  const { itemsCount, status } = useContext(CartContext);

  return (
    <div className={styles.sidemenu}>
      <div className={styles['sidemenu__theme-selector']}>
        <ThemeSelect />
      </div>
      <div className={styles['sidemenu__language-selector']}>
        {localeOptions && (
          <LanguageSelect
            defaultLanguage={localeOptions.defaultLanguage}
            languageOptions={localeOptions.languageOptions}
          />
        )}
      </div>
      <div className={styles['sidemenu__currency-selector']}>
        {localeOptions && <CurrencySelect currencyOptions={localeOptions.currencyOptions} />}
      </div>
      <div className={styles.sidemenu__search}>
        <Button type="button" className={styles['sidemenu__search']} variant="button--with-icon">
          {searchVisible === true ? <CloseIcon onClick={clickHandler} /> : <SearchIcon onClick={clickHandler} />}
        </Button>
      </div>
      <div className={styles['sidemenu__mobile-content']}>
        <Link href={RoutePaths.home} className={clsx(styles.sidemenu__heart, styles.sidemenu__link)}>
          <HeartIcon />
        </Link>
        <Link
          href={RoutePaths.home}
          className={clsx(styles.sidemenu__profile, styles.sidemenu__link)}
          onClick={profileClickHandler}>
          <ProfileIcon />
        </Link>
        <Link
          href={RoutePaths.cart}
          className={clsx(
            styles.sidemenu__cart,
            styles.sidemenu__link,
            status === 'loading' && styles['sidemenu__cart--hidden'],
          )}
          data-count={itemsCount}>
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Sidemenu;
