import apiFetch from 'utils/apiFetch';
import {
  ANONYMOUS_ENDPOINT,
  BASESITE_URL,
  CART_ENDPOINT,
  ENTRIES_ENDPOINT,
  USERS_ENDPOINT,
} from 'utils/Hybris/endpoints';

interface Data {
  guid: string | null;
  quantity: number;
  product: {
    code: string;
  };
}

export function addToCart(data: Data): Promise<void> {
  return apiFetch<void>(
    `${BASESITE_URL}/${USERS_ENDPOINT}/${ANONYMOUS_ENDPOINT}/${CART_ENDPOINT}/${data.guid}/${ENTRIES_ENDPOINT}`,
    {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
}

export default addToCart;
