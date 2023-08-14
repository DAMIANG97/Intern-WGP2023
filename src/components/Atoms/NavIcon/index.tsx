import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import styles from './NavIcon.module.scss';

const TAG = 'NavIcon';

interface NavIconProps {
  open: boolean;
}

const NavIcon: FunctionComponent<NavIconProps> = ({ open }) => {
  return (
    <div className={clsx(styles.icon, open && styles['icon--open'])}>
      <span className={styles.line1} />
      <span className={styles.line2} />
      <span className={styles.line3} />
      <span className={styles.line4} />
    </div>
  );
};

NavIcon.displayName = TAG;

export default NavIcon;
