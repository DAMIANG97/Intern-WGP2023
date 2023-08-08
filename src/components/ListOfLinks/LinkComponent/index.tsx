import React, { ComponentProps, FunctionComponent } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import clsx from 'clsx';

import styles from './LinkComponent.module.scss';

export interface LinkComponentProps extends ComponentProps<typeof NextLink> {
  link: Hybris.MenuElements;
  linkPrefix: string;
}

const LinkComponent: FunctionComponent<LinkComponentProps> = ({ link, className, linkPrefix, ...props }) => {
  const currentPath = usePathname();

  return (
    <NextLink
      className={clsx(styles[`link`], className)}
      aria-current={(link.title === 'Home' ? '/' : `${linkPrefix}${link.categoryCode}`) === currentPath}
      {...props}>
      {link.title}
    </NextLink>
  );
};

export default LinkComponent;
