import React, { FunctionComponent, ReactNode, useContext, useMemo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import getCountries from 'utils/Hybris/Checkout/getCountries';
import getDeliveryMode from 'utils/Hybris/Checkout/getDeliveryModes';
import getTitles from 'utils/Hybris/Checkout/getTitles';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';
import { UserContext } from 'utils/Providers/UserProvider/context';

interface CheckoutProviderProps {
  children: ReactNode;
}

const CheckoutProvider: FunctionComponent<CheckoutProviderProps> = ({ children }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { token, user } = useContext(UserContext);
  const { cartGUID } = useContext(CartContext);
  const lang = getCookie('NEXT_LOCALE');
  const curr = getCookie('NEXT_CURRENCY');
  const localeSuffix = `lang=${lang}&curr=${curr}`;

  const openCheckout = () => setIsCheckoutOpen(true);

  //TO DO GET PROPER DATA WHEN USER FORM IS DONE

  const countriesQuery = useQuery({
    queryKey: ['getCountries'],
    queryFn: getCountries,
    enabled: isCheckoutOpen,
  });

  const countries = countriesQuery.data || null;

  const titlesQuery = useQuery({
    queryKey: ['getTitles'],
    queryFn: getTitles,
    enabled: isCheckoutOpen,
  });

  const titles = titlesQuery.data || null;

  // const regionsQuery = useQuery({
  //   queryKey: ['getRegions', countryCode, localeSuffix],
  //   queryFn: getRegions,
  //   enabled: isCheckoutOpen,
  // });

  //const regions = regionsQuery.data || null;
  const regions = null;

  //TODO FIX REGIONS

  const deliveryModesQuery = useQuery({
    queryKey: ['getDeliveryModes', localeSuffix, cartGUID, user, token],
    queryFn: getDeliveryMode,
    enabled: isCheckoutOpen && !!user && !!token && !!cartGUID,
  });

  const deliveryModes = deliveryModesQuery.data || null;

  const checkoutData = useMemo(
    () => ({ countries, titles, regions, deliveryModes, openCheckout }),
    [countries, titles, regions, deliveryModes],
  );

  return <CheckoutContext.Provider value={checkoutData}>{children}</CheckoutContext.Provider>;
};

export default CheckoutProvider;
