/* eslint-disable @typescript-eslint/no-var-requires */
const hoistNonReactStatics = require('hoist-non-react-statics');

/**
 * @constant
 */
const LOCALES = [
  'en', // English
  'ja', // Japanese
  'de', // German
  'zh', // Chinese
];
const DEFAULT_LANGUAGE = LOCALES[0];

/**
 * @type {RequiredFields<import('next-translate').I18nConfig, 'locales' | 'defaultLocale' | 'localesToIgnore'>}
 */
const CONFIG = {
  defaultLocale: DEFAULT_LANGUAGE,
  locales: LOCALES,
  loadLocaleFrom: async (lang, ns) =>
    require(`./src/locales/${lang === 'default' ? DEFAULT_LANGUAGE : lang}/${ns}.json`),
  defaultNS: 'common',
  pages: {
    '*': ['common'],
    '/product/[productId]/index.page': ['product'],
    'rgx:^\\/cart\\/': ['cart'],
    'rgx:^\\/checkout\\/': ['checkout'],
  },
  // To make layouts work:
  staticsHoc: hoistNonReactStatics,
};

module.exports = CONFIG;
