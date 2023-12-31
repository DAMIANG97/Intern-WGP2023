import { createContext } from 'react';

import { QueryStatus, UseQueryResult } from '@tanstack/react-query';
import noop from 'lodash/noop';

export type ItemsCount = number;

export interface CartContextValue {
  totalPrice: Hybris.CartPrice | null;
  deliveryMode: Hybris.DeliveryMode | null;
  itemsCount: ItemsCount;
  status: QueryStatus;
  cartGUID: string;
  entries: Hybris.CartEntry[] | null;
  cartRefresh: UseQueryResult<Hybris.Cart, unknown>['refetch'] | (() => void);
  isRefetching: boolean;
  cartCode: string;
  cart: Hybris.Cart | null;
  clearCart: () => void;
}

export const initialValue: CartContextValue = {
  totalPrice: null,
  deliveryMode: null,
  itemsCount: 0,
  status: 'loading',
  cartGUID: '',
  entries: null,
  cartRefresh: noop,
  isRefetching: false,
  cartCode: '',
  cart: null,
  clearCart: noop,
};

export const CartContext = createContext<CartContextValue>(initialValue);
