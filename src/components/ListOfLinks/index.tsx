import React, { FunctionComponent } from 'react';
import { usePathname } from 'next/navigation';

import LinkComponent from 'components/LinkComponent';

import { LINKS_DATA } from './LinksOfLinks.config';

import styles from './ListOfLinks.module.scss';

interface ListOfLinksProps extends React.HTMLAttributes<HTMLElement> {}

const ListOfLinks: FunctionComponent<ListOfLinksProps> = () => {
  const currentPath = usePathname();

  return (
    <nav aria-label="Menu" className={styles[`list-links`]}>
      {LINKS_DATA.map((link) => (
        <LinkComponent key={link.href} aria-current={link.href === currentPath} {...link} />
      ))}
    </nav>
  );
};

export default ListOfLinks;
