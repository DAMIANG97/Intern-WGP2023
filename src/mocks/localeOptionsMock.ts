export const languageMock: Hybris.Language[] = [
  {
    active: true,
    isocode: 'en',
    name: 'English',
    nativeName: 'English',
  },
  {
    active: true,
    isocode: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
  },
  {
    active: true,
    isocode: 'de',
    name: 'German',
    nativeName: 'Deutsch',
  },
  {
    active: true,
    isocode: 'zh',
    name: 'Chinese',
    nativeName: '中文',
  },
];

export const currencyMock: Hybris.Currency[] = [
  {
    active: false,
    isocode: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
  },
  {
    active: true,
    isocode: 'USD',
    name: 'US Dollar',
    symbol: '$',
  },
];
export const localeOptionsMock: Hybris.LocaleOptions = {
  defaultLanguage: languageMock[0],
  languageOptions: languageMock,
  currencyOptions: currencyMock,
};
