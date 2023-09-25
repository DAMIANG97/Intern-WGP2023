import React, { FunctionComponent, ReactNode, useContext, useMemo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import getLocaleSuffix from 'utils/getLocaleSuffix';
import getCountries from 'utils/Hybris/Checkout/getCountries';
import getDeliveryMode from 'utils/Hybris/Checkout/getDeliveryModes';
import getTitles from 'utils/Hybris/Checkout/getTitles';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CardInfo, CheckoutContext } from 'utils/Providers/CheckoutProvider/context';
import { UserContext } from 'utils/Providers/UserProvider/context';

interface CheckoutProviderProps {
  children: ReactNode;
}

const CheckoutProvider: FunctionComponent<CheckoutProviderProps> = ({ children }) => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { token, user } = useContext(UserContext);
  const { cartGUID } = useContext(CartContext);
  const [payment, setPayment] = useState<CardInfo | null>(null);
  const localeSuffix = getLocaleSuffix();

  const openCheckout = () => setIsCheckoutOpen(true);

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

  const deliveryModesQuery = useQuery({
    queryKey: ['getDeliveryModes', localeSuffix, cartGUID, user, token],
    queryFn: getDeliveryMode,
    enabled: isCheckoutOpen && !!user && !!token && !!cartGUID,
  });

  const deliveryModes = deliveryModesQuery.data || null;

  const checkoutData = useMemo(
    () => ({ countries, titles, deliveryModes, openCheckout, payment, setPayment }),
    [countries, titles, deliveryModes, payment, setPayment],
  );

  return <CheckoutContext.Provider value={checkoutData}>{children}</CheckoutContext.Provider>;
};

export default CheckoutProvider;
