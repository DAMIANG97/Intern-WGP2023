import { type FunctionComponent, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';

import { DEFAULT_LANGUAGE, LOCALES } from 'config/i18n';
import { getCookie, setCookie } from 'cookies-next';

const TAG = 'LanguageInit';

/**
 * Initialize i18n language functionality.
 */
const LanguageInit: FunctionComponent = () => {
  const { lang = DEFAULT_LANGUAGE } = useTranslation();

  useEffect(() => {
    /**
     * We want to save user current language to cookies, because when user opens
     * page second time, we don't want to make redirects using Next.js middleware.
     *
     * What's more, we don't want the situation when user has saved locale with
     * value: `default` or other than expected. This would also require from Next.js middleware
     * to do the job in situation which should not have never happened.
     *
     * @link https://nextjs.org/docs/advanced-features/middleware
     * @link https://nextjs.org/docs/advanced-features/i18n-routing
     */
    const userLocale = `${getCookie('NEXT_LOCALE')}`;
    if (!userLocale || !LOCALES.includes(userLocale)) {
      setCookie('NEXT_LOCALE', !lang || lang === 'default' ? DEFAULT_LANGUAGE : lang);
    }
  }, [lang]);

  return null;
};

LanguageInit.displayName = TAG;

export default LanguageInit;
