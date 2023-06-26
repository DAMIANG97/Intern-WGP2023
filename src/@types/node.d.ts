// Extend the NodeJS namespace with our-defined properties
declare namespace NodeJS {
  interface ReactEnv {
    readonly REACT_APP_VERSION: string;
    readonly REACT_APP_NAME: string;
  }

  interface NextPublicEnv {
    /**
     * @example "https://customer.normet.com"
     * @example "https://localhost:3000"
     */
    readonly NEXT_PUBLIC_SITE_URL: string;
    /**
     * Revalidate time in seconds.
     * @example "900"
     */
    readonly NEXT_PUBLIC_REVALIDATE_TIME: string;
    /**
     * @example "dev"
     * @example "local"
     * @example "prod"
     */
    readonly NEXT_PUBLIC_ENV: string;
    /**
     * Date of the build in ISO format.
     */
    readonly NEXT_PUBLIC_BUILD_DATE: string;
  }

  interface ProcessEnv extends ReactEnv, NextPublicEnv {}
}
