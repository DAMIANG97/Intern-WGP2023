import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { getCartGuidEndpoint } from 'utils/Hybris/endpoints';

type Arguments = QueryFunctionContext<[queryFunctionName: 'getNewCart', userId: string]>;

async function getNewCart({ signal, queryKey: [, userId] }: Arguments): Promise<string> {
  const newCart: { type: 'string'; guid: 'string' } = await apiFetch(getCartGuidEndpoint(userId), {
    signal,
    method: 'POST',
    credentials: 'same-origin',
  });

  return newCart.guid;
}

export default getNewCart;
