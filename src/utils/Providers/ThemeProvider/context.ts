import { createContext } from 'react';

import noop from 'lodash/noop';

export type Theme = 'dark' | 'light';

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const initialValue: ThemeContextValue = {
  theme: 'light',
  setTheme: noop,
};

export const ThemeContext = createContext<ThemeContextValue>(initialValue);
