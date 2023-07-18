import React from 'react';

import { clsx } from 'clsx';

import styles from './CopyRight.module.scss';

export interface CopyrightProps {
  theme: string;
  children: React.ReactNode;
}

const Copyright = ({ theme, children }: CopyrightProps) => {
  return (
    <div
      className={clsx(
        styles.copyright__wrapper,
        styles['copyright__wrapper--black'],
        theme !== 'dark' && styles['copyright__wrapper--white'],
      )}>
      <p>{children}</p>
    </div>
  );
};

export default Copyright;
