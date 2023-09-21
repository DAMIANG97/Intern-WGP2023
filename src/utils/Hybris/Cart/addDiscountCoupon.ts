import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, CUSTOMERS_COUPONS_ENDPOINT, USERS_ENDPOINT } from 'utils/Hybris/endpoints';

interface AddDiscountCouponData {
  body: string;
  params: {
    userId: string;
    couponCode: string;
    token: string;
  };
}

function addDiscountCoupon({ body, params }: AddDiscountCouponData): Promise<unknown> {
  return apiFetch(
    `${BASESITE_URL}/${USERS_ENDPOINT}/${params.userId}/${CUSTOMERS_COUPONS_ENDPOINT}/${params.couponCode}/claim`,
    {
      method: 'POST',
      body: body,
      headers: {
        authorization: params.token,
      },
    },
  );
}

export default addDiscountCoupon;
