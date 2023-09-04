import { FunctionComponent, useContext } from 'react';
import useTranslation from 'next-translate/useTranslation';

import MoonIcon from 'assets/icons/moon.svg';
import SunIcon from 'assets/icons/sun.svg';
import { clsx } from 'clsx';
import { ThemeContext } from 'utils/Providers/ThemeProvider/context';

import styles from './ThemeSelect.module.scss';

const ThemeSelect: FunctionComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={
        theme === 'dark'
          ? t('components.themeSwitcher.switchToLightMode')
          : t('components.themeSwitcher.switchToDarkMode')
      }
      type="button"
      className={clsx(styles.toggle__button)}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSelect;
