import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getCookie, setCookie } from 'cookies-next';
import getNewCart from 'utils/Hybris/Cart/getNewCart';

function getCurrentCart() {
  const currentCart = getCookie('WGPCART');

  try {
    if (typeof currentCart === 'string') {
      const cookieObject: { guid: string } = JSON.parse(currentCart);
      return cookieObject.guid;
    }
  } catch (error) {
    console.error('Error parsing cookie', error);
  }
  return '';
}

function useNewCart(userId: string, token: string) {
  const [cartGUID, setCartGUID] = useState<string | null>(null);
  useEffect(() => {
    setCartGUID(getCurrentCart);
  }, []);
  function clearCart() {
    setCartGUID('');
  }
  useQuery({
    queryKey: ['getNewCart', userId, token],
    queryFn: getNewCart,
    enabled: cartGUID === '',
    onSuccess: (data) => {
      setCartGUID(data);
      const newCookie = JSON.stringify({ guid: data });
      setCookie('WGPCART', newCookie, { secure: true, sameSite: 'strict' });
    },
  });
  return { cartGUID: cartGUID, setCartGUID, clearCart };
}

export default useNewCart;
