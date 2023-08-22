import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

/**
 * Gets search results based on query passed as an argument
 */

async function getSearchResults(query: string, localeSuffix: string): Promise<Hybris.SearchResultResponse> {
  const response: Hybris.SearchResultResponse = await apiFetch(`${BASESITE_URL}/products/${query}${localeSuffix}`);
  return response;
}

export default getSearchResults;
