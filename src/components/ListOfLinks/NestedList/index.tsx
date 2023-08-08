import React, { FunctionComponent } from 'react';

import LinkComponent from 'components/ListOfLinks/LinkComponent';

import styles from '../ListOfLinks.module.scss';

interface NestedListProps {
  list: Hybris.MenuElements[];
  currentPath: string;
  grandchild?: boolean;
  linkPrefix: string;
}

const TAG = 'NestedList';

const NestedList: FunctionComponent<NestedListProps> = ({ list, currentPath, grandchild, linkPrefix }) => {
  return (
    <ul className={grandchild ? styles['menu__grandchild-wrapper'] : styles['menu__child-wrapper']}>
      {list.map((child) => {
        if (child.children && child.children.length > 0) {
          return (
            <div key={child.uid}>
              <span className={styles['menu__category-name']}>{child.title}</span>
              <NestedList list={child.children} currentPath={currentPath} grandchild linkPrefix={linkPrefix} />
            </div>
          );
        } else {
          return (
            <li key={child.uid}>
              <LinkComponent href={`${linkPrefix}${child.categoryCode}`} link={child} linkPrefix={linkPrefix} />
            </li>
          );
        }
      })}
    </ul>
  );
};

NestedList.displayName = TAG;

export default NestedList;
