import React, { FunctionComponent } from 'react';
import AnimateHeight from 'react-animate-height';

import ListOfLinks from 'components/Molecules/MenuListOfLinks';

import styles from './Menu.module.scss';

interface MenuProps {
  content: Hybris.MenuElements[];
  visible: boolean;
}

const TAG = 'Menu';

const Menu: FunctionComponent<MenuProps> = ({ content, visible }) => (
  <AnimateHeight height={visible ? 'auto' : 0} id="mobile-menu" className={styles.menu}>
    <ListOfLinks menuContent={content} menuVisible={visible} />
  </AnimateHeight>
);

Menu.displayName = TAG;

export default Menu;
