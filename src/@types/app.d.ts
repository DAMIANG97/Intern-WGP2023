interface PageProps {}

type AppProps = import('next/app').AppProps<PageProps>;

/**
 * For pages named: `[...slug].page.tsx`
 */
type SlugQueryArray = {
  slug: string[];
};

/**
 * For pages named: `[slug].page.tsx`
 */
type SlugQueryString = {
  slug: string;
};
