import { createContext } from 'react';

import { QueryStatus } from '@tanstack/react-query';

export type ItemsCount = number;

export interface CartContextValue {
  itemsCount: ItemsCount;
  status: QueryStatus;
  cartGUID: string | null;
}

export const initialValue: CartContextValue = {
  itemsCount: 0,
  status: 'loading',
  cartGUID: '',
};

export const CartContext = createContext<CartContextValue>(initialValue);
