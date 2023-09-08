import { createContext } from 'react';

import { Countries } from 'utils/Hybris/Checkout/getCountries';
import { DeliveryModes } from 'utils/Hybris/Checkout/getDeliveryModes';
import { RegionProps } from 'utils/Hybris/Checkout/getRegions';
import { TitleProps } from 'utils/Hybris/Checkout/getTitles';

export type ItemsCount = number;

export interface CheckoutContextValue {
  countries: Countries[] | null;
  titles: TitleProps[] | null;
  regions: RegionProps[] | null;
  deliveryModes: DeliveryModes[] | null;
}

export const initialValue: CheckoutContextValue = {
  countries: null,
  titles: null,
  regions: null,
  deliveryModes: null,
};

export const CheckoutContext = createContext<CheckoutContextValue | null>(initialValue);
