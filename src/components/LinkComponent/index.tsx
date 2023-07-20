import React, { FunctionComponent } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import clsx from 'clsx';

import styles from './LinkComponent.module.scss';

export interface LinkComponentProps extends NextLinkProps {
  children: React.ReactNode;
}

const LinkComponent: FunctionComponent<LinkComponentProps> = ({ children, ...props }) => {
  return (
    <NextLink className={clsx(styles[`link`])} {...props}>
      {children}
    </NextLink>
  );
};

export default LinkComponent;
