import { AppProps, NextWebVitalsMetric } from 'next/app';

import LanguageInit from 'modules/Language/Init';
import { getComponentLayout } from 'utils/layouts';

import 'styles/globals.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  const getLayout = getComponentLayout(router.route);

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <LanguageInit />
    </>
  );
}

/**
 * @link https://nextjs.org/docs/advanced-features/measuring-performance#sending-results-to-analytics
 */
export function reportWebVitals({ id, name, label, value }: NextWebVitalsMetric) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, {
      event_category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      event_label: id,
      non_interaction: true,
    });
  }
}

export default MyApp;
