import { createContext } from 'react';

import noop from 'lodash/noop';
import { Countries } from 'utils/Hybris/Checkout/getCountries';
import { DeliveryModes } from 'utils/Hybris/Checkout/getDeliveryModes';
import { TitleProps } from 'utils/Hybris/Checkout/getTitles';

export type ItemsCount = number;

export interface CardInfo {
  cardType: string;
  cvv: string;
  cardExpMonth: string;
  cardExpYear: string;
  cardNumber: string;
  name: string;
}

export interface CheckoutContextValue {
  countries: Countries | null;
  titles: TitleProps | null;
  deliveryModes: DeliveryModes | null;
  openCheckout: () => void;
  payment: CardInfo | null;
  setPayment: React.Dispatch<React.SetStateAction<CardInfo | null>>;
}

export const initialValue: CheckoutContextValue = {
  countries: null,
  titles: null,
  deliveryModes: null,
  openCheckout: noop,
  payment: null,
  setPayment: noop,
};

export const CheckoutContext = createContext<CheckoutContextValue>(initialValue);
