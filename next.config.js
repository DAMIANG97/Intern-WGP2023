const nextTranslate = require('next-translate-plugin');
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /**
   * We want to have source maps when started local or dev built version.
   */
  productionBrowserSourceMaps: ['local', 'dev'].includes(process.env.NEXT_PUBLIC_ENV),
  /**
   * Because we want to create tests near pages.
   */
  pageExtensions: ['page.tsx', 'api.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts'],
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString(),
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextTranslate(nextConfig);
