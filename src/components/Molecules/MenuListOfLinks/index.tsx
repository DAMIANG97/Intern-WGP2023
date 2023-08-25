import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import MenuListItem from 'components/Molecules/MenuListItem';

import styles from './MenuListOfLinks.module.scss';

interface MenuListOfLinksProps {
  menuContent: Hybris.MenuElements[];
  menuVisible: boolean;
}

const MenuListOfLinks: FunctionComponent<MenuListOfLinksProps> = ({ menuContent, menuVisible }) => {
  const { t } = useTranslation();

  return (
    <nav aria-label={t('components.menu.label')} className={clsx(styles.menu, menuVisible && styles['menu--visible'])}>
      <ul className={styles.menu__list}>
        {menuContent?.map((link) => {
          return <MenuListItem key={link.uid} link={link} menuVisible={menuVisible} />;
        })}
      </ul>
    </nav>
  );
};

export default MenuListOfLinks;
