/**
 * This fill will contain utils for TypeScript that are missing in the language pack.
 */

/**
 * Empty object when you don't want indexed object - `Record`.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
type EmptyObject = {};

/**
 * Join two strings with conjunction.
 * @example
 * ```ts
 * type Str1 = 'hello'
 * type Str2 = 'world'
 * type Joined = JoinStrings<Str1, Str2>
 * // type Joined = 'hello.world'
 * ```
 */
type JoinStrings<S1 extends string, S2 extends string, CON extends string = '.'> = `${S1}${CON}${S2}`;

/**
 * @private for {@link Paths} only.
 */
type _I18nPluralTypes = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other' | `${number}`;

/**
 * Generate discriminated union of object keys joined with comma.
 * @example
 * ```ts
 * const OBJ = {
 *   hello: 'world',
 *   nested: {
 *     path: 'wow'
 *   }
 * } as const;
 *
 * type ObjPaths = Paths<typeof OBJ>
 * // type ObjPaths = "hello" | "nested.path"
 * ```
 */
type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? JoinStrings<K, Paths<T[K]>>
    : K extends `${infer M}_${_I18nPluralTypes}`
    ? M
    : T[K] extends string
    ? K
    : K extends string
    ? T[K] extends readonly (infer ITEM)[]
      ? ITEM extends string
        ? `${K}[${number}]`
        : JoinStrings<`${K}[${number}]`, Paths<ITEM>>
      : never
    : never;
}[keyof T];

/**
 * Create discriminated union from array items.
 * @example
 * ```ts
 * const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'] as const;
 * type Values = ArrayValues<typeof SUPPORTED_FORMATS>;
 * // type Values = "image/jpg" | "image/jpeg" | "image/png"
 * ```
 */
type ArrayValues<ArrayType extends ReadonlyArray<unknown>> = ArrayType extends ReadonlyArray<infer ElementType>
  ? ElementType
  : never;

/**
 * Make some properties required.
 *
 * @example
 * ```ts
 * interface User {
 *   login: string;
 *   email?: string;
 *   phone?: string;
 * }
 *
 * type RequiredEmailUser = RequiredFields<User, 'email'>;
 * // type RequiredEmailUser {
 * //  login: string;
 * //  email: string; // not optional: -?
 * //  phone?: string; // still optional
 * // }
 * ```
 */
type RequiredFields<T, FIELDS extends keyof T> = { [P in FIELDS]-?: T[P] } & Omit<T, FIELDS>;

/**
 * DeepPartial recursively makes all properties of an object optional.
 *
 * @example
 * ```
 * interface User {
 *  login: string;
 *  email?: string;
 *  phone?: string;
 * }
 *
 * type PartialUser = DeepPartial<User>;
 * // type PartialUser = {
 * //   login?: string | undefined;
 * //   email?: string | undefined;
 * //   phone?: string | undefined;
 * // }
 * ```
 */
type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

/**
 * Make object writable.
 *
 * @example
 * ```ts
 * interface User {
 *   login: string;
 *   email?: string;
 * }
 * type ReadonlyUser = Readonly<User>;
 * type WritableUser = Writable<ReadonlyUser>;
 * // type WritableUser === User;
 * ```
 * Second example
 * @example
 * ```ts
 * type WritableArray = Writable<ReadonlyArray<string>>;
 * // type WritableArray === Array<string>;
 * ```
 */
type Writable<T> = {
  -readonly [K in keyof T]: T[K] extends ReadonlyArray<infer V> ? Array<V> : T[K];
};

/**
 * `keyof any` represents the type of any value that can be used as an index to an object.
 * Currently you can use `string | number | symbol` to index into an object.
 * But maybe someday we will have another type of index.
 * @example
 * ```ts
 * type AnyKey = keyof any
 * // type AnyKey = string | number | symbol
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyKey = keyof any;

/**
 * @private for @see ObjectsWithField
 */
type _GetObjectsWithField<OBJ_UNION, PROP extends AnyKey> = OBJ_UNION extends infer OBJ
  ? Required<OBJ> extends { [key in PROP]: unknown }
    ? OBJ
    : never
  : never;

/**
 * Get objects from union that have field with key `PROP`.
 * @example
 * ```ts
 * type Obj1 = { hello: string }
 * type Obj2 = { world: string }
 * type Obj3 = { hello: string; world: string }
 * type ObjUnion = Obj1 | Obj2 | Obj3
 * type ObjWithHello = ObjectsWithField<ObjUnion, 'hello'>
 * // type ObjWithHello = Obj1 | Obj3
 * ```
 */
type ObjectsWithField<OBJ_UNION, KEY extends AnyKey> = _GetObjectsWithField<OBJ_UNION, KEY> extends never
  ? unknown
  : _GetObjectsWithField<OBJ_UNION, KEY>;

/**
 * One definition so that we could use it widely in code.
 */
type PromiseVoidFunction = () => Promise<void>;
