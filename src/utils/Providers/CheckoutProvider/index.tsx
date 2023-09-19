import React, { FunctionComponent, ReactNode, useMemo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import getCountries from 'utils/Hybris/Checkout/getCountries';
import getDeliveryMode from 'utils/Hybris/Checkout/getDeliveryModes';
import getRegions from 'utils/Hybris/Checkout/getRegions';
import getTitles from 'utils/Hybris/Checkout/getTitles';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';

interface CheckoutProviderProps {
  children: ReactNode;
}

const CheckoutProvider: FunctionComponent<CheckoutProviderProps> = ({ children }) => {
  //TO DO CHANGE STATE WHEN FORM IS OPEN
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const lang = getCookie('NEXT_LOCALE');
  const curr = getCookie('NEXT_CURRENCY');
  const localeSuffix = `lang=${lang}&curr=${curr}`;

  const openCheckout = () => setIsCheckoutOpen(true);

  //TO DO GET PROPER DATA WHEN USER FORM IS DONE
  const countryCode = 'JP';
  const user = 'current';
  const orderNumber = '00002301';

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

  const regionsQuery = useQuery({
    queryKey: ['getRegions', countryCode, localeSuffix],
    queryFn: getRegions,
    enabled: isCheckoutOpen,
  });

  const regions = regionsQuery.data || null;

  const deliveryModesQuery = useQuery({
    queryKey: ['getDeliveryModes', localeSuffix, orderNumber, user],
    queryFn: getDeliveryMode,
    enabled: isCheckoutOpen,
  });

  const deliveryModes = deliveryModesQuery.data || null;

  const checkoutData = useMemo(
    () => ({ countries, titles, regions, deliveryModes, openCheckout }),
    [countries, titles, regions, deliveryModes],
  );

  return <CheckoutContext.Provider value={checkoutData}>{children}</CheckoutContext.Provider>;
};

export default CheckoutProvider;
