import React, { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './H1.module.scss';

export interface H1Props extends ComponentProps<'h1'> {}

const H1 = ({ children, className }: H1Props) => {
  return <h1 className={clsx(styles[`h1`], className)}>{children}</h1>;
};

export default H1;
