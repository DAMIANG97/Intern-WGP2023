import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CART_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

interface Params {
  userId: string;
  cartId: string;
  entryNumber: number;
  token: string;
}

function deleteCartEntry({ userId, cartId, entryNumber, token }: Params) {
  return apiFetch(`${BASESITE_URL}/${USERS_ENDPOINT}/${userId}/${CART_ENDPOINT}/${cartId}/entries/${entryNumber}`, {
    method: 'DELETE',
    headers: { Authorization: token },
  });
}

export default deleteCartEntry;
