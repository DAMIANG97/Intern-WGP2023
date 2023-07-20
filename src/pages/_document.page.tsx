import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

import { DEFAULT_LANGUAGE } from 'config/i18n';

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

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet" />
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
