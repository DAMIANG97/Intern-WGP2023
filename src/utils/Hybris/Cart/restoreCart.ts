import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CART_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

type Arguments = QueryFunctionContext<[queryFunctionName: 'restoreCart', token: string, oldCartId: string | null]>;

async function restoreCart({ signal, queryKey: [, token, oldCartId] }: Arguments): Promise<Hybris.Cart> {
  return apiFetch(`${BASESITE_URL}/${USERS_ENDPOINT}/current/${CART_ENDPOINT}?fields=FULL&oldCartId=${oldCartId}`, {
    signal,
    method: 'POST',
    credentials: 'same-origin',
    headers: { Authorization: token },
  });
}

export default restoreCart;
