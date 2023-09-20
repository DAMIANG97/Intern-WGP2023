import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASE_URL, TOKEN_REVOKE_ENDPOINT } from 'utils/Hybris/endpoints';
import { GetTokenResponse } from 'utils/Hybris/User/getToken';

type Arguments = QueryFunctionContext<[queryFnName: 'revokeToken', body: Record<string, string>]>;

function revokeToken({ signal, queryKey: [, body] }: Arguments): Promise<GetTokenResponse> {
  const parsedBody = new URLSearchParams(body);
  return apiFetch<GetTokenResponse>(`${BASE_URL}/${TOKEN_REVOKE_ENDPOINT}`, {
    method: 'POST',
    signal: signal,
    body: parsedBody,
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
  });
}

export default revokeToken;
