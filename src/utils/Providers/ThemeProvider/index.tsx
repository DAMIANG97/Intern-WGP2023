import { FunctionComponent, ReactNode, useEffect, useMemo, useState } from 'react';

import { initialValue, Theme, ThemeContext, ThemeContextValue } from './context';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  // TODO: Temporary solution, it is enough for now but later we should add:
  // - Store value in the localStorage
  // - If localStorage is empty, we should check the browser theme
  // - Set user theme inside `_document.page.tsx` to avoid flashing with default theme
  const [theme, setTheme] = useState<Theme>(initialValue.theme);

  const context = useMemo<ThemeContextValue>(() => ({ theme, setTheme }), [setTheme, theme]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);
  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
