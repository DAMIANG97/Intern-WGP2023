/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest');
const { resolve } = require('path');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

console.debug('process.env.NODE_ENV', process.env.NODE_ENV);

const IGNORE_PATTERS = ['/@jest/', '/coverage/', '/.swc/', '/node_modules/', '/out/', '/.next/', '\\.snap'];

/**
 * @type {import('ts-jest/dist/types').JestConfigWithTsJest}
 */
const customJestConfig = {
  verbose: true,
  passWithNoTests: true,
  rootDir: resolve(__dirname, 'src'),
  logHeapUsage: true,
  testPathIgnorePatterns: IGNORE_PATTERS,
  coveragePathIgnorePatterns: IGNORE_PATTERS,
  collectCoverageFrom: ['./**/*.{ts,tsx}'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: [resolve(__dirname, 'src', '@jest', 'setupTests.ts')],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/@jest/__mocks__/file.mock.ts',
  },
  reporters: [
    'default',
    ['jest-junit', { ancestorSeparator: ' > ', classNameTemplate: '{classname}', titleTemplate: '{title}' }],
  ],
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
