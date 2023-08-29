import type { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CART_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

type Arguments = QueryFunctionContext<[queryFnName: 'getCartItemsCount', userId: string, localeSuffix: string]>;

async function getCartItemsCount({
  signal,
  queryKey: [, userId, localeSuffix],
}: Arguments): Promise<Hybris.CartItemsCountResponse> {
  const response: Hybris.CartItemsCountResponse = await apiFetch(
    `${BASESITE_URL}/${USERS_ENDPOINT}/${userId}/${CART_ENDPOINT}/${localeSuffix}`,
    { signal },
  );
  return response;
}

export default getCartItemsCount;
