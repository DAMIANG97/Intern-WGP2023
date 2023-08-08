import { withThemeByDataAttribute } from '@storybook/addon-styling';
import I18nProvider from 'next-translate/I18nProvider';
import config from '../i18n';
import commonEN from '../src/locales/en/common.json';
import 'styles/global.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      values: [
        { name: 'dark', value: '#212121' },
        { name: 'white', value: '#fff' },
      ],
    },
  },

  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    (Story) => (
      <I18nProvider lang="en" namespaces={{ common: commonEN }} config={config}>
        <Story />
      </I18nProvider>
    ),
  ],
};

export default preview;
