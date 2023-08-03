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
  images: {
    domains: ['wgp2023.mooo.com'],
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

module.exports = nextTranslate(nextConfig);
