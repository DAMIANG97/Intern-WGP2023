import { matcherHint,printExpected, printReceived } from 'jest-matcher-utils';
import hasProperty from 'utils/hasProperty';

type EmptyObject = object & Record<string, unknown>;

/**
 * Returns missing paths in object2 based on object1.
 */
function getMissingPaths<OBJ1, OBJ2>(obj1: OBJ1, obj2: OBJ2): string[] {
  const missing: string[] = [];

  Object.keys(obj1 as object).forEach((objKey) => {
    const value1 = obj1[objKey as keyof typeof obj1];
    const value2 = obj2?.[objKey as keyof typeof obj2];

    if (!hasProperty(obj2, objKey)) {
      missing.push(objKey);
    } else if (Array.isArray(value1)) {
      for (let i = 0; i < (value1 as Array<unknown>).length; i++) {
        const element1 = value1[i];
        const element2 = (value2 as Array<unknown>)[i]; // We assume that both of them are arrays.
        const nestedMissing = getMissingPaths(element1, element2);
        missing.push(...nestedMissing.map((v) => [`${objKey}[${i}]`, v].join('.')));
      }
    } else if (value1 && typeof value1 === 'object') {
      const nestedMissing = getMissingPaths(value1, value2);
      missing.push(...nestedMissing.map((v) => [objKey, v].join('.')));
    }
  });

  return missing;
}

type EqualStructureResponse = [
  /**
   * If both objects are equal.
   */
  isEqual: boolean,
  /**
   * Missing paths in object no. 1
   */
  missingInObj1: string[],
  /**
   * Missing paths in object no. 2
   */
  missingInObj2: string[],
];

export function hasEqualStructure<OBJ1 extends EmptyObject, OBJ2 extends EmptyObject>(
  obj1: OBJ1,
  obj2: OBJ2,
): EqualStructureResponse {
  const missingInObj1 = getMissingPaths(obj2, obj1);
  const missingInObj2 = getMissingPaths(obj1, obj2);
  const isEqual = missingInObj1.length === 0 && missingInObj2.length === 0;
  return [isEqual, missingInObj1, missingInObj2];
}

const NEW_LINE = `
`;

/**
 * Function used to print message with missing properties.
 */
function printMissing(missing: string[], objectName: string) {
  if (!missing.length) {
    return '';
  }
  return `
Missing properties in ${objectName} by paths:
${missing.join(NEW_LINE)}`;
}

/**
 * Function to extend Jest `expect` with new assertion - toMatchStructure.
 * This assertion checks if the both objects have the same structure. We don't care
 * about the values, we are checking the structure only.
 *
 * How to use `toMatchStructure`?
 * @example
 * ```ts
 * expect({ test: 123 }).toMatchStructure({ test: 456 }); // true
 *
 * expect({ test: 123 }).toMatchStructure({}); // false
 * expect({ test: [{ nested: 123 }] }).toMatchStructure({ test: [] }); // false
 * ```
 *
 * How to extend Jest expect:
 * @example
 * ```ts
 * // setupTests.ts
 * import toMatchStructure from '@jest/utils/toMatchStructure';
 * expect.extend({ toMatchStructure });
 *
 * // src/@types/jest.d.ts
 * interface CustomMatchers<R = unknown> {
 *   toMatchStructure<OBJ1>(actual: OBJ1): R;
 * }
 * declare global {
 *   namespace jest {
 *     interface Expect extends CustomMatchers {}
 *     interface Matchers<R> extends CustomMatchers<R> {}
 *     interface InverseAsymmetricMatchers extends CustomMatchers {}
 *   }
 * }
 * ```
 */
function toMatchStructure<OBJ1 extends EmptyObject, OBJ2 extends EmptyObject>(
  obj1: OBJ1,
  obj2: OBJ2,
): jest.CustomMatcherResult {
  const [isEqual, missingInObj1, missingInObj2] = hasEqualStructure(obj1, obj2);

  return {
    message: (): string => {
      /// Used with `.not`.
      if (isEqual && !missingInObj1.length && !missingInObj2.length) {
        return [
          matcherHint('.not.toMatchStructure', 'object1', 'object2'),
          printExpected('Expected: different structure'),
          printReceived('Received: the same structure'),
          `Based on structure: ${printReceived('object1')} === ${printExpected('object2')}`,
        ]
          .filter(Boolean)
          .join(NEW_LINE);
      }

      /// Used without `.not`
      return [
        matcherHint('.toMatchStructure', 'object1', 'object2'),
        printExpected('Expected: the same structure'),
        printReceived('Received: different structure'),
        printMissing(missingInObj1, printReceived('object1')),
        printMissing(missingInObj2, printExpected('object2')),
      ]
        .filter(Boolean)
        .join(NEW_LINE);
    },
    pass: isEqual,
  };
}

export default toMatchStructure;
