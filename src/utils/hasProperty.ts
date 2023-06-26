type HasPropertyResult<OBJ, KEY extends AnyKey, EXPECTED> = unknown extends EXPECTED
  ? NonNullable<OBJ> & { [property in KEY]: KEY extends keyof OBJ ? OBJ[KEY] : EXPECTED }
  : NonNullable<OBJ> & EXPECTED

/**
 * Type guard to check if the property key is in the object.
 * You can pass expected type if you want.
 *
 * @example
 * ```ts
 * // For example, I don't know the type.
 * const object = { x: 'Hello' } as unknown;
 * if(hasProperty(object, 'x')) {
 *   object.x; // type: unknown
 * }
 *
 * const object = { x: 'Hello' };
 * if(hasProperty(object, 'x')) {
 *   object.x; // type: string
 * }
 *
 * const object = { x: 'Hello' };
 * if(hasProperty<string | undefined, typeof object, 'x'>(object, 'x')) {
 *   object.x; // type: string | undefined
 * }
 * ```
 */
function hasProperty<OBJ = EmptyObject, KEY extends AnyKey = string, EXPECTED = ObjectsWithField<OBJ, KEY>>(
  object: OBJ,
  key: KEY,
): object is HasPropertyResult<OBJ, KEY, EXPECTED> {
  return !!object && Object.prototype.hasOwnProperty.call(object, key)
}

export default hasProperty
