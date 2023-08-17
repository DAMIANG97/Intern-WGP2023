import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

interface SearchResultResponse {
  type: string;
  freeTextSearch: string;
  pagination: Hybris.Pagination;
  products: Hybris.SearchResultProduct[];
}

/**
 * Gets search results based on query passed as an argument
 */

async function getSearchResults(query: string): Promise<SearchResultResponse> {
  const response: SearchResultResponse = await apiFetch(`${BASESITE_URL}/products/${query}`);
  return response;
}

export default getSearchResults;
