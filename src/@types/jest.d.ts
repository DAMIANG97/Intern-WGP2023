interface CustomMatchers<R = unknown> {
  /**
   * This assertion checks if the both objects have the same structure. We don't care
   * about the values, we are checking the structure only.
   *
   * @example
   * ```ts
   * expect({ test: 123 }).toMatchStructure({ test: 456 }); // true
   *
   * expect({ test: 123 }).toMatchStructure({}); // false
   * expect({ test: [{ nested: 123 }] }).toMatchStructure({ test: [] }); // false
   * ```
   *
   * @see `@jest\toMatchStructure.ts``
   */
  toMatchStructure<OBJ1>(actual: OBJ1): R;
}

declare namespace jest {
  interface Expect extends CustomMatchers {}
  interface Matchers<R> extends CustomMatchers<R> {}
  interface InverseAsymmetricMatchers extends CustomMatchers {}
}
