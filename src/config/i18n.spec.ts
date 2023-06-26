import { DEFAULT_LANGUAGE } from 'config/i18n';
import fs from 'fs';
import path from 'path';

const localesDir = path.resolve(__dirname, '../', 'locales');

/**
 * Get folders from `locales` like `en`, `fi`, etc.
 */
const LANGUAGES = fs
  .readdirSync(localesDir)
  .filter((fileOrFolder) => fs.lstatSync(path.resolve(localesDir, fileOrFolder)).isDirectory());

/**
 * Get resources aka namespaces like `common.json`
 */
const RESOURCES = fs.readdirSync(path.resolve(localesDir, DEFAULT_LANGUAGE));

/**
 * Load resource aka namespace and return it.
 */
const loadResource = (language: string, resourceName: string): Promise<Record<string, unknown>> =>
  import(`${localesDir}/${language}/${resourceName}`);

describe('i18n', () => {
  describe('validate if all locales contains all keys as it is set in resource in default language', () => {
    describe.each(RESOURCES)('for resource: "%s"', (resourceName) => {
      it.each(LANGUAGES)('should have the same structure for language: %s', async (language) => {
        // Given
        const defaultResource = await loadResource(DEFAULT_LANGUAGE, resourceName);
        const resource = await loadResource(language, resourceName);

        // Then
        expect(defaultResource).toStrictEqual(expect.any(Object));
        expect(resource).toStrictEqual(expect.any(Object));

        expect(resource).toMatchStructure(defaultResource);
      });
    });
  });
});
