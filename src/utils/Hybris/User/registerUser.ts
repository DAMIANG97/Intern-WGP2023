import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

export interface RegisterData {
  uid: string;
  firstName: string;
  lastName: string;
  password: string;
}
export interface RegisterUserResponse {
  type: string;
  name: string;
  uid: string;
  active: boolean;
  currency: Hybris.Currency;
  customerId: string;
  displayUid: string;
  firstName: string;
  language: Hybris.Language;
  lastName: string;
  selected: boolean;
  title: string;
  titleCode: string;
}

type Arguments = QueryFunctionContext<[queryFnName: 'registerUser', data: RegisterData | null, token: string]>;

function registerUser({ signal, queryKey: [, data, token] }: Arguments): Promise<RegisterUserResponse> {
  const body = JSON.stringify(data);
  return apiFetch<RegisterUserResponse>(`${BASESITE_URL}/${USERS_ENDPOINT}`, {
    method: 'POST',
    body: body,
    signal: signal,
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
  });
}

export default registerUser;
