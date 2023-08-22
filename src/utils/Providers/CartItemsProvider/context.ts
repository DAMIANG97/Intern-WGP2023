import { createContext } from 'react';

import noop from 'lodash/noop';

export type ItemsCount = number;

export interface CartItemsCountContextValue {
  itemsCount: ItemsCount;
  setItemsCount: (count: ItemsCount) => void;
}

export const initialValue: CartItemsCountContextValue = {
  itemsCount: 0,
  setItemsCount: noop,
};

export const CartItemsContext = createContext<CartItemsCountContextValue>(initialValue);
