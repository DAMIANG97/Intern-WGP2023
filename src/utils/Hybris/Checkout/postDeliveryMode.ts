import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CART_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

interface Data {
  userId: string;
  cartCode: string;
  token: string;
  selectedValue: string;
}
function postDeliveryMode({ userId, cartCode, token, selectedValue }: Data) {
  return apiFetch(
    `${BASESITE_URL}/${USERS_ENDPOINT}/${userId}/${CART_ENDPOINT}/${cartCode}/deliverymode?deliveryModeId=${selectedValue}`,
    { method: 'put', headers: { Authorization: token } },
  );
}
export default postDeliveryMode;
