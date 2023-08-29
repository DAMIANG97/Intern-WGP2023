import { FunctionComponent, ReactNode, useMemo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import getCartItemsCount from 'utils/Hybris/getCartItemsCount';

import { CartItemsContext, CartItemsCountContextValue, initialValue, ItemsCount } from './context';

interface ItemsCartProviderProps {
  children: ReactNode;
}

const CartItemsProvider: FunctionComponent<ItemsCartProviderProps> = ({ children }) => {
  const [itemsCount, setItemsCount] = useState<ItemsCount>(initialValue.itemsCount);

  const response = useQuery(['getCartItemsCount', 'anonymous', 'en'], getCartItemsCount, {
    onSuccess: (data) => {
      setItemsCount(data.count);
    },
  });

  const context = useMemo<CartItemsCountContextValue>(
    () => ({ itemsCount, setItemsCount, status: response.status }),
    [itemsCount, response.status],
  );

  return <CartItemsContext.Provider value={context}>{children}</CartItemsContext.Provider>;
};

export default CartItemsProvider;
