import React, { ComponentProps, FunctionComponent, ReactNode } from 'react';
import NextLink from 'next/link';

import clsx from 'clsx';

import styles from './LinkComponent.module.scss';

export interface LinkComponentProps extends ComponentProps<typeof NextLink> {
  children: ReactNode;
}

const LinkComponent: FunctionComponent<LinkComponentProps> = ({ children, className, ...props }) => {
  return (
    <NextLink className={clsx(styles[`link`], className)} {...props}>
      {children}
    </NextLink>
  );
};

export default LinkComponent;
