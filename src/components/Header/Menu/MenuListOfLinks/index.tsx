import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import MenuListItem from 'components/Header/Menu/MenuListOfLinks/MenuListItem';

import styles from './MenuListOfLinks.module.scss';

interface MenuListOfLinksProps {
  menuContent: Hybris.MenuElements[];
  menuVisible: boolean;
}

const MenuListOfLinks: FunctionComponent<MenuListOfLinksProps> = ({ menuContent, menuVisible }) => {
  const LINK_PREFIX = '/search/';
  const { t } = useTranslation();

  return (
    <nav aria-label={t('components.menu.label')} className={clsx(styles.menu, menuVisible && styles['menu--visible'])}>
      <ul className={styles.menu__list}>
        {menuContent?.map((link) => {
          return <MenuListItem key={link.uid} linkPrefix={LINK_PREFIX} link={link} menuVisible={menuVisible} />;
        })}
      </ul>
    </nav>
  );
};

export default MenuListOfLinks;
