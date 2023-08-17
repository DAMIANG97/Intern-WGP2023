import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import SearchResult from 'modules/SearchResult';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, HOMEPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getFooterContent from 'utils/Hybris/getFooterContent';
import getLangCurrSuffix from 'utils/Hybris/getLangCurrSuffix';
import getLocaleOptions from 'utils/Hybris/getLocaleOptions';
import getMenuContent from 'utils/Hybris/getMenuContent';
import getSearchResults from 'utils/Hybris/getSearchResults';

interface SearchResultPageProps extends ComponentProps<typeof SearchResult> {}

const SearchResultPage: NextPage<SearchResultPageProps> = SearchResult;

export const getServerSideProps: GetServerSideProps<SearchResultPageProps> = async ({
  locale,
  req,
  query,
  resolvedUrl,
}) => {
  const hybrisQuery = resolvedUrl.slice(15, resolvedUrl.length);
  const categoryId = query.categoryId ?? '';
  let searchResults: Hybris.SearchResultProduct[] = [];
  if (categoryId === 'search') {
    searchResults = (await getSearchResults(hybrisQuery)).products;
  }
  const localeSuffix = getLangCurrSuffix(locale, req.cookies['NEXT_CURRENCY']);
  const localeOptions = await getLocaleOptions(localeSuffix);
  const data = await apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${HOMEPAGE_ENDPOINT}?${localeSuffix}`);
  const menuContent = await getMenuContent(data, localeSuffix);
  const footerContent = await getFooterContent(data, localeSuffix);

  return {
    props: {
      localeOptions: localeOptions,
      menuContent: menuContent,
      footerContent: footerContent,
      categoryId: categoryId,
      products: searchResults, // TODO, get products from categoryID
    },
  };
};
export default SearchResultPage;
