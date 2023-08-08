/**
 * Returns suffix for hybris query with current language and currency.
 * If language or currency is undefined, default values will be provided.
 */

function getLangCurrSuffix(locale: string | undefined, curr: string | undefined): string {
  const language = locale || 'en';
  const currency = curr || 'USD';
  return `&lang=${language}&curr=${currency}`;
}

export default getLangCurrSuffix;
