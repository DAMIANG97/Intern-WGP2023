import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import { DEFAULT_LANGUAGE } from 'config/i18n';

const FONTS = ['/fonts/Poppins-Regular.woff2', '/fonts/Poppins-Light.woff2', '/fonts/Poppins-Bold.woff2'] as const;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const locale = this.props.__NEXT_DATA__.locale || DEFAULT_LANGUAGE;
    return (
      <Html lang={locale} translate="no" dir="ltr" data-theme="auto">
        <Head>
          <meta property="og:locale" content={locale} />

          <meta name="author" content="Columbus Global" />
          <meta name="version" content={`${process.env.NEXT_PUBLIC_ENV || ''}-${process.env.REACT_APP_VERSION}`} />

          {FONTS.map((font) => (
            <link key={font} rel="preload" as="font" type="font/woff2" crossOrigin="anonymous" href={font} />
          ))}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                const theme = JSON.parse(localStorage.getItem('wgp2023.anonymous.theme')) || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch {}`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
