import React, { useContext, useState } from 'react';

import Container from 'components/Atoms/Container';
import CheckoutNavigation from 'components/Molecules/CheckoutNavigation';
import OrderSummary from 'components/Molecules/OrderSummary';
import Breadcrumb from 'components/Organisms/Breadcrumb';
import CheckoutForm from 'components/Organisms/CheckoutForm';
import CheckoutPlaceOrder from 'components/Organisms/CheckoutPlaceOrder';
import CreateAccountForm from 'components/Organisms/CreateAccountForm';
import LoginForm from 'components/Organisms/LoginForm';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './Checkout.module.scss';

//TO DO remove it while connection navigation to steps
const steps = [
  {
    title: 'Account',
  },
  {
    title: 'Delivery',
  },
  {
    title: 'Payment',
  },
];

export enum StepIndexes {
  ACCOUNT = 0,
  DELIVERY = 1,
  PAYMENT = 2,
}

interface CheckoutProps {}

const Checkout: React.FC<CheckoutProps> = () => {
  const { authStatus } = useContext(UserContext);
  const isLoggedIn = authStatus.userStatus === 'loggedIn';
  const [activeStepIndex, setActiveStepIndex] = useState<StepIndexes>(
    isLoggedIn ? StepIndexes.DELIVERY : StepIndexes.ACCOUNT,
  );
  const handleStepChange = (step: StepIndexes) => {
    setActiveStepIndex(step);
  };

  return (
    <Container>
      <Breadcrumb variant="dark" />
      <CheckoutNavigation
        steps={steps}
        onStepChange={handleStepChange}
        activeStepIndex={activeStepIndex}
        isLoggedIn={isLoggedIn}
      />
      <main className={styles.content}>
        {activeStepIndex === StepIndexes.ACCOUNT && (
          <section className={styles.wrapper}>
            <div>
              <LoginForm handleStepChange={handleStepChange} />
              <CreateAccountForm handleStepChange={handleStepChange} />
            </div>
            <div className={styles['wrapper--hide-on-mobile']}>
              <OrderSummary />
            </div>
          </section>
        )}
        {activeStepIndex === StepIndexes.DELIVERY && (
          <section className={styles.wrapper}>
            <CheckoutForm handleStepChange={handleStepChange} />
            <div className={styles['wrapper--hide-on-mobile']}>
              <OrderSummary />
            </div>
          </section>
        )}
        {activeStepIndex === StepIndexes.PAYMENT && <CheckoutPlaceOrder />}
      </main>
    </Container>
  );
};

export default Checkout;
