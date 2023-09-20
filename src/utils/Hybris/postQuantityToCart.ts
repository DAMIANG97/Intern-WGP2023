import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CART_ENDPOINT, ENTRIES_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

interface Data {
  user: string;
  token: string;
  guid: string | null;
  quantity: number;
  product: {
    code: string;
  };
}

export function addToCart(data: Data): Promise<void> {
  return apiFetch<void>(
    `${BASESITE_URL}/${USERS_ENDPOINT}/${data.user}/${CART_ENDPOINT}/${data.guid}/${ENTRIES_ENDPOINT}`,
    {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        Authorization: data.token,
      },
      body: JSON.stringify(data),
    },
  );
}

export default addToCart;
