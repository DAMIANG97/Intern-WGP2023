import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CART_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

interface AddAddressData {
  body: string;
  params: {
    userId: string;
    cartCode: string;
  };
}

function addAddress({ body, params }: AddAddressData): Promise<unknown> {
  return apiFetch(
    `${BASESITE_URL}/${USERS_ENDPOINT}/${params.userId}/${CART_ENDPOINT}/${params.cartCode}/addresses/delivery`,
    {
      method: 'POST',
      body: body,
    },
  );
}

export default addAddress;
