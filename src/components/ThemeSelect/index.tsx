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
    <div className={styles.toggle__container}>
      <button
        onClick={() => setTheme('dark')}
        aria-label={t('components.themeSwitcher.switchToDarkMode')}
        type="button"
        className={clsx(
          styles.toggle__button,
          styles['toggle__button--selected'],
          theme !== 'dark' && styles['toggle__button--none'],
        )}>
        <span className={styles.toggle__text}>{t('components.themeLabel.darkMode')}</span> <MoonIcon />
      </button>
      <button
        onClick={() => setTheme('light')}
        aria-label={t('components.themeSwitcher.switchToLightMode')}
        type="button"
        className={clsx(
          styles.toggle__button,
          styles['toggle__button--selected'],
          theme === 'dark' && styles['toggle__button--none'],
        )}>
        <span className={styles.toggle__text}>{t('components.themeLabel.lightMode')}</span> <SunIcon />
      </button>
    </div>
  );
};

export default ThemeSelect;
