import React, { FunctionComponent } from 'react';

import CheckoutPayment from 'components/Organisms/CheckoutPayment';

interface CheckoutPlaceOrderProps {}

const TAG = 'CheckoutPlaceOrder';

const CheckoutPlaceOrder: FunctionComponent<CheckoutPlaceOrderProps> = () => {
  return <CheckoutPayment />;
};

CheckoutPlaceOrder.displayName = TAG;

export default CheckoutPlaceOrder;
