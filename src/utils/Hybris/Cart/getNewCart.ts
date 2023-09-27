import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { getCartGuidEndpoint } from 'utils/Hybris/endpoints';

type Arguments = QueryFunctionContext<[queryFunctionName: 'getNewCart', userId: string, token: string]>;

async function getNewCart({ signal, queryKey: [, userId, token] }: Arguments): Promise<string> {
  const field = userId === 'current' ? 'code' : 'guid';
  const newCart: { type: 'string'; guid?: 'string'; code?: 'string' } = await apiFetch(
    getCartGuidEndpoint(userId, field),
    {
      signal,
      method: 'POST',
      credentials: 'same-origin',
      headers: { Authorization: token },
    },
  );
  if (userId === 'current' && newCart.code) {
    return newCart.code;
  }
  if (newCart.guid) {
    return newCart.guid;
  }
  return '';
}

export default getNewCart;
