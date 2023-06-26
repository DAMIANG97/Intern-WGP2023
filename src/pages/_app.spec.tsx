import type { FunctionComponent } from 'react';
import type { Router } from 'next/router';

import TestWrapper from '@jest/TestWrapper';
import { render, screen } from '@testing-library/react';
import App, { reportWebVitals } from 'pages/_app.page';

const Component: FunctionComponent = (props) => <div data-testid="result">{JSON.stringify(props)}</div>;

jest.mock('next/router', () => ({
  __esModule: true,
  default: {
    push: jest.fn(),
  },
  useRouter: jest.fn(() => ({
    route: '_app',
    asPath: '/',
    events: { on: jest.fn(), off: jest.fn() },
    replace: jest.fn(),
  })),
}));

describe('_app', () => {
  describe('Component', () => {
    it('should render component with page props', () => {
      // Given
      console.error = jest.fn();
      const router = {
        route: '/',
      } as Router;
      const pageProps: PageProps = {};

      // When
      render(<App Component={Component} pageProps={pageProps} router={router} />, { wrapper: TestWrapper });

      // Then
      const result = screen.getByTestId('result').innerHTML;
      expect(JSON.parse(result)).toEqual(pageProps);
    });
  });

  describe('reportWebVitals', () => {
    it('should send event to GTM when window.gtag is defined', () => {
      // Given
      window.gtag = jest.fn();

      // When
      reportWebVitals({
        id: '1672216870350-2350774649180',
        startTime: 1672216870350,
        name: 'Next.js-hydration',
        label: 'custom',
        value: 197.5,
      });

      // Then
      expect(window.gtag).toHaveBeenCalled();
      expect(window.gtag).toHaveBeenCalledWith('event', 'Next.js-hydration', {
        event_category: 'Next.js custom metric',
        value: 198,
        event_label: '1672216870350-2350774649180',
        non_interaction: true,
      });
    });

    it('should not send event to GTM when window.gtag is not defined', () => {
      // Given
      window.gtag = void 0 as unknown as (typeof window)['gtag'];

      // Then
      expect(() =>
        reportWebVitals({
          id: '1672216870350-2350774649180',
          startTime: 1672216870350,
          name: 'Next.js-hydration',
          label: 'custom',
          value: 197.5,
        }),
      ).not.toThrow();
    });
  });
});
