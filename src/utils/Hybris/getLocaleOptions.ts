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
export const getLocaleOptions = async (
  locale: string | undefined,
  currency: string,
): Promise<Hybris.LocaleOptions | []> => {
  const localeSuffix = `?lang=${locale}&curr=${currency}`;
  const baseSitesObject: BaseSitesObject = await apiFetch(`${BASE_URL}${VERSION_ID}basesites`);
  const defaultLanguage = baseSitesObject.baseSites.find((site) => site.uid === BASESITE_ID)?.defaultLanguage;
  const languageOptions: LanguageObject = await apiFetch(`${BASESITE_URL}/${LANGUAGE_ENDPOINT}${localeSuffix}`);
  const currencyOptions: CurrencyObject = await apiFetch(`${BASESITE_URL}/${CURRENCY_ENDPOINT}${localeSuffix}`);
  if (defaultLanguage)
    return {
      defaultLanguage: defaultLanguage,
      languageOptions: languageOptions.languages,
      currencyOptions: currencyOptions.currencies,
    };
  return [];
};
