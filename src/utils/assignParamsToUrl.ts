import hasProperty from 'utils/hasProperty'

type URLParamValue = number | string | boolean | null | undefined | string[]

/**
 * @example
 * ```ts
 * type Variables = URLVariables<'/products/[slug]/[...id]/:name'>
 * // type Variables = "slug" | "id" | "name"
 * ```
 */
type URLVariables<URL> = URL extends string
  ? URL extends `${infer BEFORE}:${infer KEY}/${infer AFTER}` | `${infer BEFORE}:${infer KEY}`
    ? KEY | URLVariables<BEFORE> | URLVariables<AFTER>
    : URL extends `${infer BEFORE}[[...${infer KEY}]]/${infer AFTER}` | `${infer BEFORE}[...${infer KEY}]`
    ? KEY | URLVariables<BEFORE> | URLVariables<AFTER>
    : URL extends `${infer BEFORE}[...${infer KEY}]/${infer AFTER}` | `${infer BEFORE}[...${infer KEY}]`
    ? KEY | URLVariables<BEFORE> | URLVariables<AFTER>
    : URL extends `${infer BEFORE}[${infer KEY}]/${infer AFTER}` | `${infer BEFORE}[${infer KEY}]`
    ? KEY | URLVariables<BEFORE> | URLVariables<AFTER>
    : never
  : string

/**
 * Returns params object from URL.
 *
 * @example
 * ```ts
 * type Params = Params<'/products/[slug]/[...id]/:name'>
 * // type Params = { slug: URLParamValue, id: URLParamValue, name: URLParamValue }
 * ```
 */
type Params<URL> = {
  [key in URLVariables<URL>]: URLParamValue
}

/**
 * Replace key in URL with value.
 */
type Assign<BEFORE extends string, KEY, AFTER extends string, PARAMS> = KEY extends keyof PARAMS
  ? PARAMS[KEY] extends string | number
    ? `${BEFORE}${PARAMS[KEY]}${AFTER}`
    : URL
  : URL

/**
 * Assign params to URL but done with only types :D.
 * @example
 * ```ts
 * const params = { slug: 123, id: 456, name: 'lorem' } as const;
 * const url = '/products/[slug]/[...id]/:name/'
 * type Assigned = AssignParamsToURL<typeof url, typeof params>
 * // type Assigned = "/products/123/456/lorem/"
 * ```
 */
type AssignParamsToURL<URL, PARAMS> = URL extends string
  ? URL extends `${infer BEFORE}:${infer KEY}/${infer AFTER}`
    ? AssignParamsToURL<Assign<BEFORE, KEY, `/${AFTER}`, PARAMS>, PARAMS>
    : URL extends `${infer BEFORE}:${infer KEY}`
    ? AssignParamsToURL<Assign<BEFORE, KEY, '', PARAMS>, PARAMS>
    : URL extends `${infer BEFORE}[[...${infer KEY}]]/${infer AFTER}`
    ? AssignParamsToURL<Assign<BEFORE, KEY, `/${AFTER}`, PARAMS>, PARAMS>
    : URL extends `${infer BEFORE}[[...${infer KEY}]]`
    ? AssignParamsToURL<Assign<BEFORE, KEY, '', PARAMS>, PARAMS>
    : URL extends `${infer BEFORE}[...${infer KEY}]/${infer AFTER}`
    ? AssignParamsToURL<Assign<BEFORE, KEY, `/${AFTER}`, PARAMS>, PARAMS>
    : URL extends `${infer BEFORE}[...${infer KEY}]`
    ? AssignParamsToURL<Assign<BEFORE, KEY, '', PARAMS>, PARAMS>
    : URL extends `${infer BEFORE}[${infer KEY}]/${infer AFTER}`
    ? AssignParamsToURL<Assign<BEFORE, KEY, `/${AFTER}`, PARAMS>, PARAMS>
    : URL extends `${infer BEFORE}[${infer KEY}]`
    ? AssignParamsToURL<Assign<BEFORE, KEY, '', PARAMS>, PARAMS>
    : URL
  : string

/**
 * @example
 * ```ts
 * const params = { slug: 123, name: 'lorem', id: 456 } as const;
 * const url = '/products/[slug]/[...id]/:name/'
 * const href = assignParamsToUrl(url, params)
 * // href = "/products/123/456/lorem/"
 * ```
 */
function assignParamsToUrl<URL extends string = string, PARAMS extends Params<URL> = Params<URL>>(
  url: URL,
  params: PARAMS,
): AssignParamsToURL<URL, PARAMS> {
  let result = url

  for (const paramName in params) {
    if (hasProperty(params, paramName)) {
      const paramValue = params[paramName]
      const value = typeof paramValue === 'undefined' || paramValue === null ? '' : encodeURIComponent(`${paramValue}`)

      const regexMatches = [
        `:${paramName}`, // :param
        `\\[\\[\\.\\.\\.${paramName}\\]\\]`, // [[...param]]
        `\\[\\.\\.\\.${paramName}\\]`, // [...param]
        `\\[${paramName}\\]`, // [param]
      ].join('|')
      const regex = new RegExp(`(${regexMatches})`, 'g')

      if (regex.test(result)) {
        result = result.replace(regex, `${value}`) as URL
      }
    }
  }

  return result as AssignParamsToURL<URL, PARAMS>
}

export default assignParamsToUrl
