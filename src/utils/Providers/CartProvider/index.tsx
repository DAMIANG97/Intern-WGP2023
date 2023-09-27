import { FunctionComponent, ReactNode, useContext, useEffect, useMemo } from 'react';

import { useQuery } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import getLocaleSuffix from 'utils/getLocaleSuffix';
import useNewCart from 'utils/Hooks/useNewCart';
import getCart from 'utils/Hybris/Cart/getCart';
import restoreCart from 'utils/Hybris/Cart/restoreCart';
import { UserContext } from 'utils/Providers/UserProvider/context';

import { CartContext, CartContextValue, initialValue } from './context';

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: FunctionComponent<CartProviderProps> = ({ children }) => {
  const { user, token, authStatus } = useContext(UserContext);
  const { userStatus } = authStatus;
  const { cartGUID, setCartGUID, clearCart } = useNewCart(user, token);
  const localeSuffix = getLocaleSuffix();

  // delete cart code from cookies when user logs out.
  useEffect(() => {
    if (userStatus === 'loggedOut') {
      setCartGUID(null);
      setCookie('WGPCART', null, { secure: true, sameSite: 'strict' });
    }
  }, [setCartGUID, userStatus]);

  //assign anonymous cart to user when user logs in.
  const restoredCart = useQuery({
    queryKey: ['restoreCart', token, cartGUID, localeSuffix],
    queryFn: restoreCart,
    enabled: !!cartGUID && cartGUID.length > 8 && user !== 'anonymous',
    onSuccess: (data) => {
      setCartGUID(data.code);
      const newCookie = JSON.stringify({ guid: data.code });
      setCookie('WGPCART', newCookie, { secure: true, sameSite: 'strict' });
    },
  });
  //get cart for logged in user when cart code is present or get cart for anonymous user
  const cart = useQuery({
    queryKey: ['getCart', user, cartGUID, token, localeSuffix],
    queryFn: getCart,
    enabled:
      (!!cartGUID && cartGUID.length === 8 && user !== 'anonymous') ||
      (!!cartGUID && cartGUID.length > 8 && user === 'anonymous'),
  });

  const context = useMemo<CartContextValue>(() => {
    if (cart.isSuccess && cartGUID) {
      return {
        cart: cart.data,
        totalItems: cart.data.totalItems,
        totalPrice: cart.data.totalPrice,
        deliveryMode: cart.data.deliveryMode,
        itemsCount: cart.data.totalItems,
        status: cart.status,
        cartGUID: cartGUID,
        entries: cart.data.entries,
        cartRefresh: cart.refetch,
        isRefetching: cart.isRefetching,
        cartCode: cart.data.code,
        clearCart: clearCart,
      };
    }
    if (user !== 'anonymous' && restoredCart.isSuccess) {
      return {
        cart: restoredCart.data,
        totalItems: restoredCart.data.totalItems,
        totalPrice: restoredCart.data.totalPrice,
        deliveryMode: restoredCart.data.deliveryMode,
        itemsCount: restoredCart.data.totalItems,
        status: restoredCart.status,
        cartGUID: restoredCart.data.code,
        entries: restoredCart.data.entries,
        cartRefresh: restoredCart.refetch,
        isRefetching: restoredCart.isRefetching,
        cartCode: restoredCart.data.code,
        clearCart: clearCart,
      };
    }
    return {
      totalPrice: initialValue.totalPrice,
      deliveryMode: initialValue.deliveryMode,
      itemsCount: initialValue.itemsCount,
      status: initialValue.status,
      cartGUID: initialValue.cartGUID,
      entries: null,
      cartRefresh: cart.refetch,
      isRefetching: cart.isRefetching,
      cartCode: initialValue.cartCode,
      cart: initialValue.cart,
      clearCart: clearCart,
    };
  }, [cart, cartGUID, restoredCart, user, clearCart]);

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
};

export default CartProvider;
