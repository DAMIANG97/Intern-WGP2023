import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

import LinkComponent from 'components/Atoms/LinkComponent';
import AccordionItem from 'components/Molecules/AccordionItem';
import MenuNestedList from 'components/Molecules/MenuNestedList';
import useIsDesktop from 'utils/Hooks/useIsDesktop';

import styles from '../MenuListOfLinks/MenuListOfLinks.module.scss';

interface MenuListItemProps {
  link: Hybris.MenuElements;
  menuVisible: boolean;
}

const TAG = 'ListItem';

const MenuListItem: FunctionComponent<MenuListItemProps> = ({ link, menuVisible }) => {
  const router = useRouter();
  const isDesktop = useIsDesktop();
  return (
    <li className={styles['menu__link-wrapper']}>
      {!isDesktop && link.children.length > 0 ? (
        <AccordionItem key={link.uid} name={link.title} href={link.url} parentOpen={menuVisible}>
          <MenuNestedList
            list={link.children}
            currentPath={router.asPath}
            menuVisible={menuVisible}
            isDesktop={isDesktop}
          />
        </AccordionItem>
      ) : (
        <>
          <LinkComponent className={styles.menu__link} href={link.url} aria-current={link.url === router.asPath}>
            {link.title}
          </LinkComponent>
          {link.children.length > 0 && (
            <MenuNestedList
              list={link.children}
              currentPath={router.asPath}
              menuVisible={menuVisible}
              isDesktop={isDesktop}
            />
          )}
        </>
      )}
    </li>
  );
};

MenuListItem.displayName = TAG;

export default MenuListItem;
