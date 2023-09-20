import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, USERS_ENDPOINT } from 'utils/Hybris/endpoints';
import { RegisterUserResponse } from 'utils/Hybris/User/registerUser';

type Arguments = QueryFunctionContext<[queryFnName: 'loginUser' | 'loginReturningUser', token: string]>;

function loginUser({ signal, queryKey: [, token] }: Arguments): Promise<RegisterUserResponse> {
  return apiFetch<RegisterUserResponse>(`${BASESITE_URL}/${USERS_ENDPOINT}/current`, {
    signal: signal,
    headers: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
  });
}
export default loginUser;
