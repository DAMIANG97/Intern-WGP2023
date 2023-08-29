import React from 'react';
import { AppProps, NextWebVitalsMetric } from 'next/app';

import LanguageInit from 'modules/Language/Init';
import { getComponentLayout } from 'utils/layouts';
import QueryClient from 'utils/Providers/QueryClient';

import 'styles/global.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
  const getLayout = getComponentLayout(pageProps, router.route);

  return (
    <QueryClient>
      {getLayout(<Component {...pageProps} />)}
      <LanguageInit />
    </QueryClient>
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
