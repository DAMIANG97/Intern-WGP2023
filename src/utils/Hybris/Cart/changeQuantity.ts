import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CART_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

interface ChangeQuantityParams {
  params: {
    userId: string;
    cartId: string;
    entryNumber: number;
  };
  body: {
    quantity: number;
  };
}

async function changeQuantity({ params, body }: ChangeQuantityParams) {
  return apiFetch(
    `${BASESITE_URL}/${USERS_ENDPOINT}/${params.userId}/${CART_ENDPOINT}/${params.cartId}/entries/${params.entryNumber}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  );
}
export default changeQuantity;
