import React, { FunctionComponent } from 'react';
import { usePathname } from 'next/navigation';

import AccordionItem from 'components/AccordionItem';
import MenuNestedList from 'components/Header/Menu/MenuListOfLinks/MenuNestedList';
import LinkComponent from 'components/LinkComponent';
import useBreakpointCheck from 'utils/Hooks/useBreakpointCheck';

import styles from '../MenuListOfLinks.module.scss';

interface MenuListItemProps {
  link: Hybris.MenuElements;
  linkPrefix: string;
  menuVisible: boolean;
}

const TAG = 'ListItem';

const MenuListItem: FunctionComponent<MenuListItemProps> = ({ link, linkPrefix, menuVisible }) => {
  const currentPath = usePathname();
  const isDesktop = useBreakpointCheck();
  return (
    <li className={styles['menu__link-wrapper']}>
      {!isDesktop && link.children.length > 0 ? (
        <AccordionItem
          key={link.uid}
          name={link.title}
          href={link.itemId === 'Home' ? '/' : `${linkPrefix}${link.categoryCode}`}
          parentOpen={menuVisible}>
          <MenuNestedList
            list={link.children}
            currentPath={currentPath}
            linkPrefix={linkPrefix}
            menuVisible={menuVisible}
            isDesktop={isDesktop}
          />
        </AccordionItem>
      ) : (
        <>
          <LinkComponent
            className={styles.menu__link}
            href={link.itemId === 'Home' ? '/' : `${linkPrefix}${link.categoryCode}`}
            aria-current={(link.itemId === 'Home' ? '/' : `${linkPrefix}${link.categoryCode}`) === currentPath}>
            {link.title}
          </LinkComponent>
          {link.children.length > 0 && (
            <MenuNestedList
              list={link.children}
              currentPath={currentPath}
              linkPrefix={linkPrefix}
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
