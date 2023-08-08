import React, { FunctionComponent } from 'react';
import { usePathname } from 'next/navigation';

import LinkComponent from 'components/ListOfLinks/LinkComponent';
import NestedList from 'components/ListOfLinks/NestedList';

import styles from './ListOfLinks.module.scss';

interface ListOfLinksProps {
  menuContent: Hybris.MenuElements[];
}

const ListOfLinks: FunctionComponent<ListOfLinksProps> = ({ menuContent }) => {
  const currentPath = usePathname();
  const LINK_PREFIX = '/search/';

  return (
    <nav aria-label="Menu" className={styles.menu}>
      <ul className={styles.menu__list}>
        {menuContent?.map((link) => {
          if (link.children.length > 0) {
            return (
              <li key={link.uid} className={styles['menu__link-wrapper']}>
                <LinkComponent
                  href={`${LINK_PREFIX}${link.categoryCode}`}
                  link={link}
                  linkPrefix={LINK_PREFIX}
                  className={styles.menu__link}
                />
                <NestedList list={link.children} currentPath={currentPath} linkPrefix={LINK_PREFIX} />
              </li>
            );
          } else {
            return (
              <li key={link.uid} className={styles['menu__link-wrapper']}>
                <LinkComponent href={`${LINK_PREFIX}${link.categoryCode}`} link={link} linkPrefix={LINK_PREFIX} />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default ListOfLinks;
