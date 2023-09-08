/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Override types of the `useTranslation` hook and `Trans` to get strict typing.
 *
 * You can find more information here:
 * @link https://github.com/aralroca/next-translate/issues/721
 * They created there a new function with overridden types,
 * but this approach requires developer to think that one (useTranslation)
 * should be imported from our codebase. Instead of this, we overrode
 * types of the useTranslation so we have strong typing OOTB.
 */

/**
 * Add here new properties when you add new namespace.
 *
 * Why there is only `pl`?
 * Because it is our default locale @see i18n.js
 */
interface TranslationKeys {
  common: Paths<typeof import('locales/pl/common.json')>;
  product: Path<typeof import('locales/pl/product.json')>;
}
/**
 * For hook: `useTranslation`
 */
declare module 'next-translate/useTranslation' {
  type Query = {
    [name: string]: unknown;
  } | null;

  type Options<RETURNS_OBJECT = boolean> = {
    returnObjects?: RETURNS_OBJECT;
    fallback?: string | string[];
    default?: string;
    ns?: string;
  };

  /// Override types from `next-translate/useTranslation` to get strict typing.
  interface TranslateFun<NS extends keyof TranslationKeys> {
    // Stringified keys
    (i18nKey: TranslationKeys[NS], query?: Query, options?: Options<false>): string;
  }

  export interface I18n<NS extends keyof TranslationKeys> {
    t: TranslateFun<NS>;
    lang: string;
  }

  export default function useTranslation<NS extends keyof TranslationKeys = 'common'>(defaultNS?: NS): I18n<NS>;
}

/**
 * For component: `<Trans />`
 */
declare module 'next-translate/Trans' {
  /// Override types from `next-translate/trans` to get strict typing.
  export interface TransProps<NS extends keyof TranslationKeys> {
    i18nKey: TranslationKeys[NS];
    components?: React.ReactElement[] | Record<string, React.ReactElement>;
    values?: { [name: string]: unknown };
    fallback?: string | string[];
    defaultTrans?: string;
    ns?: NS;
  }

  export default function Trans<NS extends keyof TranslationKeys = 'common'>({
    i18nKey,
    values,
    components,
    fallback,
    defaultTrans,
    ns,
  }: TransProps<NS>): any;
}
