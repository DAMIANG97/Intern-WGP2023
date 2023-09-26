import React, { FunctionComponent, useContext } from 'react';

import ShippingSummary from 'components/Molecules/ShippingSummary';
import CheckoutPayment from 'components/Organisms/CheckoutPayment';
import { CartContext } from 'utils/Providers/CartProvider/context';

interface CheckoutPlaceOrderProps {}

const TAG = 'CheckoutPlaceOrder';

const CheckoutPlaceOrder: FunctionComponent<CheckoutPlaceOrderProps> = () => {
  const { cart } = useContext(CartContext);
  return (
    <>
      <CheckoutPayment />
      <ShippingSummary address={cart?.deliveryAddress} deliveryMode={cart?.deliveryMode} />
    </>
  );
};

CheckoutPlaceOrder.displayName = TAG;

export default CheckoutPlaceOrder;
