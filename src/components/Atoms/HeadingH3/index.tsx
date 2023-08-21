import React, { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './HeadingH3.module.scss';

interface Headingh3Props extends ComponentProps<'h3'> {}

const HeadingH3 = ({ children, className }: Headingh3Props) => {
  return <h3 className={clsx(styles.headingh3__title, className)}>{children}</h3>;
};

export default HeadingH3;
