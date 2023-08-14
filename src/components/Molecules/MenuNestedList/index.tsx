import React, { FunctionComponent } from 'react';

import LinkComponent from 'components/Atoms/LinkComponent';
import AccordionItem from 'components/Molecules/AccordionItem';

import styles from '../MenuListOfLinks/MenuListOfLinks.module.scss';

interface MenuNestedListProps {
  list: Hybris.MenuElements[];
  currentPath: string;
  grandchild?: boolean;
  linkPrefix: string;
  menuVisible: boolean;
  isDesktop: boolean;
}

const TAG = 'MenuNestedList';

const MenuNestedList: FunctionComponent<MenuNestedListProps> = ({
  list,
  currentPath,
  grandchild,
  linkPrefix,
  menuVisible,
  isDesktop,
}) => {
  return (
    <ul className={grandchild ? styles['menu__grandchild-wrapper'] : styles['menu__child-wrapper']}>
      {list.map((child) => {
        if (child.children && child.children.length > 0) {
          return (
            <li key={child.uid} className={styles.menu__category}>
              {isDesktop ? (
                <>
                  <span className={styles['menu__category-name']}>{child.title}</span>
                  <MenuNestedList
                    list={child.children}
                    currentPath={currentPath}
                    grandchild
                    linkPrefix={linkPrefix}
                    menuVisible={menuVisible}
                    isDesktop={isDesktop}
                  />
                </>
              ) : (
                <AccordionItem name={child.title} parentOpen={menuVisible}>
                  <MenuNestedList
                    list={child.children}
                    currentPath={currentPath}
                    grandchild
                    linkPrefix={linkPrefix}
                    menuVisible={menuVisible}
                    isDesktop={isDesktop}
                  />
                </AccordionItem>
              )}
            </li>
          );
        }
        return (
          <li key={child.uid}>
            <LinkComponent
              href={child.itemId === 'Home' ? '/' : `${linkPrefix}${child.categoryCode}`}
              aria-current={(child.itemId === 'Home' ? '/' : `${linkPrefix}${child.categoryCode}`) === currentPath}>
              {child.title}
            </LinkComponent>
          </li>
        );
      })}
    </ul>
  );
};

MenuNestedList.displayName = TAG;

export default MenuNestedList;
