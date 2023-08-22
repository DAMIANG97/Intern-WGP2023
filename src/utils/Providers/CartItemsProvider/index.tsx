import { FunctionComponent, ReactNode, useMemo, useState } from 'react';

import { CartItemsContext, CartItemsCountContextValue, initialValue, ItemsCount } from './context';

interface ItemsCartProviderProps {
  children: ReactNode;
}

const CartItemsProvider: FunctionComponent<ItemsCartProviderProps> = ({ children }) => {
  const [itemsCount, setItemsCount] = useState<ItemsCount>(initialValue.itemsCount);
  const context = useMemo<CartItemsCountContextValue>(
    () => ({ itemsCount, setItemsCount }),
    [setItemsCount, itemsCount],
  );

  return <CartItemsContext.Provider value={context}>{children}</CartItemsContext.Provider>;
};

export default CartItemsProvider;
