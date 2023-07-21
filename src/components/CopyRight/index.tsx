import React from 'react';

import styles from './CopyRight.module.scss';

export interface CopyrightProps {
  children: React.ReactNode;
}

const Copyright = ({ children }: CopyrightProps) => {
  return (
    <div className={styles.copyright__wrapper}>
      <p>{children}</p>
    </div>
  );
};

export default Copyright;
