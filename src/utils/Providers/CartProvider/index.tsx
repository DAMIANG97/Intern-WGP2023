import { FunctionComponent, ReactNode, useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';
import useNewCart from 'utils/Hooks/useNewCart';
import getCart from 'utils/Hybris/Cart/getCart';

import { CartContext, CartContextValue, initialValue } from './context';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {
  const userId = 'anonymous'; // TODO: CHANGE WHEN WE ADD AUTHENTICATION
  const cartGUID = useNewCart(userId);

  const cart = useQuery({
    queryKey: ['getCart', userId, cartGUID],
    queryFn: getCart,
    enabled: !!cartGUID,
  });
  const context = useMemo<CartContextValue>(() => {
    if (cart.isSuccess && cartGUID) {
      return {
        itemsCount: cart.data.totalItems,
        status: cart.status,
        cartGUID: cartGUID,
        entries: cart.data.entries,
        cartRefresh: cart.refetch,
        isRefetching: cart.isRefetching,
        cartCode: cart.data.code,
      };
    }
    return {
      itemsCount: initialValue.itemsCount,
      status: initialValue.status,
      cartGUID: initialValue.cartGUID,
      entries: null,
      cartRefresh: cart.refetch,
      isRefetching: cart.isRefetching,
      cartCode: initialValue.cartCode,
    };
  }, [cart, cartGUID]);

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};

export default CartProvider;
