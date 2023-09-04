import apiFetch from 'utils/apiFetch';
import {
  BASE_URL,
  BASESITE_ID,
  BASESITE_URL,
  CURRENCY_ENDPOINT,
  LANGUAGE_ENDPOINT,
  VERSION_ID,
} from 'utils/Hybris/endpoints';

interface BaseSitesObject {
  baseSites: {
    channel: string;
    defaultLanguage: Hybris.Language;
    locale?: string;
    name: string;
    theme: string;
    uid: string;
  }[];
}

interface CurrencyObject {
  currencies: Hybris.Currency[];
}

interface LanguageObject {
  languages: Hybris.Language[];
}

/**
 * Gets available languages and currencies
 */
const getLocaleOptions = async (localeSuffix: string): Promise<Hybris.LocaleOptions | []> => {
  const [baseSitesObject, languageOptions, currencyOptions] = await Promise.all([
    apiFetch<BaseSitesObject>(`${BASE_URL}${VERSION_ID}basesites?${localeSuffix}`),
    apiFetch<LanguageObject>(`${BASESITE_URL}/${LANGUAGE_ENDPOINT}`),
    apiFetch<CurrencyObject>(`${BASESITE_URL}/${CURRENCY_ENDPOINT}`),
  ]);

  const defaultLanguage = baseSitesObject.baseSites.find((site) => site.uid === BASESITE_ID)?.defaultLanguage;
  if (defaultLanguage)
    return {
      defaultLanguage: defaultLanguage,
      languageOptions: languageOptions.languages,
      currencyOptions: currencyOptions.currencies,
    };
  return [];
};

export default getLocaleOptions;
