import React, { FunctionComponent } from 'react';
import AnimateHeight from 'react-animate-height';

import clsx from 'clsx';
import ListOfLinks from 'components/Header/Menu/MenuListOfLinks';
import useBreakpointCheck from 'utils/Hooks/useBreakpointCheck';

import styles from './Menu.module.scss';

interface MenuProps {
  content: Hybris.MenuElements[];
  visible: boolean;
}

const TAG = 'Menu';

const Menu: FunctionComponent<MenuProps> = ({ content, visible }) => {
  const isDesktop = useBreakpointCheck();

  if (isDesktop) {
    return (
      <div className={styles.menu}>
        <ListOfLinks menuContent={content} menuVisible={visible} />
      </div>
    );
  } else
    return (
      <AnimateHeight height={visible ? 'auto' : 0} id="mobile-menu" className={styles['menu--mobile']}>
        <div className={clsx(styles.menu)}>
          <ListOfLinks menuContent={content} menuVisible={visible} />
        </div>
      </AnimateHeight>
    );
};

Menu.displayName = TAG;

export default Menu;
