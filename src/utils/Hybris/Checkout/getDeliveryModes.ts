import { QueryFunctionContext } from '@tanstack/react-query';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL } from 'utils/Hybris/endpoints';

export interface DeliveryModes {
  deliveryModes: {
    code: string;
    description: string;
    name: string;
    deliveryCost: {
      currencyIso: string;
      formattedValue: string;
      priceType: string;
      value: number;
    };
  }[];
}

type Arguments = QueryFunctionContext<
  [queryFnName: 'getDeliveryModes', localeSuffix: string, orderNumber: string, user: string, token: string]
>;

function getDeliveryModes({
  signal,
  queryKey: [, localeSuffix, orderNumber, user, token],
}: Arguments): Promise<DeliveryModes> {
  return apiFetch<DeliveryModes>(`${BASESITE_URL}/users/${user}/carts/${orderNumber}/deliverymodes?${localeSuffix}`, {
    signal,
    credentials: 'same-origin',
    headers: {
      authorization: token,
    },
  });
}

export default getDeliveryModes;
