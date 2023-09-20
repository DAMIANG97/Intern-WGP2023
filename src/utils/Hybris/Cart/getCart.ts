import type { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CART_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

type Arguments = QueryFunctionContext<[queryFnName: 'getCart', userId: string, cartId: string | null, token: string]>;

function getCart({ signal, queryKey: [, userId, cartId, token] }: Arguments): Promise<Hybris.Cart> {
  return apiFetch<Hybris.Cart>(`${BASESITE_URL}/${USERS_ENDPOINT}/${userId}/${CART_ENDPOINT}/${cartId}?fields=FULL`, {
    signal,
    credentials: 'same-origin',
    headers: { Authorization: token },
  });
}

export default getCart;
