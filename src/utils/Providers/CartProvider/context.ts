import { createContext } from 'react';

import { QueryStatus, UseQueryResult } from '@tanstack/react-query';
import noop from 'lodash/noop';

export type ItemsCount = number;

export interface CartContextValue {
  itemsCount: ItemsCount;
  status: QueryStatus;
  cartGUID: string;
  entries: Hybris.CartEntry[] | null;
  cartRefresh: UseQueryResult<Hybris.Cart, unknown>['refetch'] | (() => void);
  isRefetching: boolean;
}

export const initialValue: CartContextValue = {
  itemsCount: 0,
  status: 'loading',
  cartGUID: '',
  entries: null,
  cartRefresh: noop,
  isRefetching: false,
};

export const CartContext = createContext<CartContextValue>(initialValue);
