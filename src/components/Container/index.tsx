import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import styles from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FunctionComponent<ContainerProps> = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;
