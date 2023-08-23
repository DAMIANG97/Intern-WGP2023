import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import SearchResult from 'modules/SearchResult';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, SEARCH_ENDPOINT } from 'utils/Hybris/endpoints';
import getFooterContent from 'utils/Hybris/getFooterContent';
import getHeroContentSearch from 'utils/Hybris/getHeroContentSearch';
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
  const localeSuffix = getLangCurrSuffix(locale, req.cookies['NEXT_CURRENCY']);
  const searchResults: Hybris.SearchResultResponse | null =
    categoryId === 'search' ? await getSearchResults(hybrisQuery, localeSuffix) : null;
  const localeOptions = await getLocaleOptions(localeSuffix);
  const data = await apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${SEARCH_ENDPOINT}?${localeSuffix}`);
  const heroContentSearch = getHeroContentSearch(data);
  const menuContent = await getMenuContent(data, localeSuffix);
  const footerContent = await getFooterContent(data, localeSuffix);

  return {
    props: {
      heroContentSearch: heroContentSearch,
      localeOptions: localeOptions,
      menuContent: menuContent,
      footerContent: footerContent,
      categoryId: categoryId,
      results: searchResults,
    },
  };
};
export default SearchResultPage;
