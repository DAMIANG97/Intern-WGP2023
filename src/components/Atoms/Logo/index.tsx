import React, { FunctionComponent } from 'react';
import Link from 'next/link';

import LogoIcon from 'assets/icons/logo.svg';
import clsx from 'clsx';
import { RoutePaths } from 'utils/routes';

import styles from './Logo.module.scss';

interface LogoProps {
  className?: string;
}

const Logo: FunctionComponent<LogoProps> = ({ className }) => (
  <div className={clsx(styles.logo__wrapper, className)}>
    <Link className={styles.logo__link} href={RoutePaths.home}>
      <LogoIcon />
    </Link>
  </div>
);

export default Logo;
