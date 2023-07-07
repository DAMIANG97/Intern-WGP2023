import React from 'react';
import Link from 'next/link';

import LogoIcon from 'assets/icons/logo.svg';
import { RoutePaths } from 'utils/routes'

import styles from './Logo.module.scss';

const Logo = () => (
  <div className={styles.logo__wrapper}>
    <Link className={styles.logo__link} href={RoutePaths.home}>
      <LogoIcon />
    </Link>
  </div>
);

export default Logo;
