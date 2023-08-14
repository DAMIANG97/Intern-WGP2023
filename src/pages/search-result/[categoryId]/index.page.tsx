import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import SearchResult from 'modules/SearchResult';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, HOMEPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getFooterContent from 'utils/Hybris/getFooterContent';
import getLangCurrSuffix from 'utils/Hybris/getLangCurrSuffix';
import getLocaleOptions from 'utils/Hybris/getLocaleOptions';
import getMenuContent from 'utils/Hybris/getMenuContent';

interface SearchResultPageProps extends ComponentProps<typeof SearchResult> {}

const SearchResultPage: NextPage<SearchResultPageProps> = SearchResult;

export const getServerSideProps: GetServerSideProps<SearchResultPageProps> = async ({ locale, req, params }) => {
  const categoryId = params?.categoryId ?? '';
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
    },
  };
};
export default SearchResultPage;
