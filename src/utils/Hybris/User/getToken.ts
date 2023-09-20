import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { AUTHORIZATION_TOKEN_ENDPOINT, BASE_URL } from 'utils/Hybris/endpoints';

export interface GetTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
}

type Arguments = QueryFunctionContext<[queryFnName: 'getToken' | 'getLoginToken', body: Record<string, string>]>;

function getToken({ signal, queryKey: [, body] }: Arguments) {
  const parsedBody = new URLSearchParams(body);
  return apiFetch<GetTokenResponse>(`${BASE_URL}/${AUTHORIZATION_TOKEN_ENDPOINT}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: parsedBody,
    signal: signal,
  });
}

export default getToken;
