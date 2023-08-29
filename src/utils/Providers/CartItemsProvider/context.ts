import { createContext } from 'react';

import { QueryStatus } from '@tanstack/react-query';
import noop from 'lodash/noop';

export type ItemsCount = number;

export interface CartItemsCountContextValue {
  itemsCount: ItemsCount;
  setItemsCount: (count: ItemsCount) => void;
  status: QueryStatus;
}

export const initialValue: CartItemsCountContextValue = {
  itemsCount: 0,
  setItemsCount: noop,
  status: 'loading',
};

export const CartItemsContext = createContext<CartItemsCountContextValue>(initialValue);
