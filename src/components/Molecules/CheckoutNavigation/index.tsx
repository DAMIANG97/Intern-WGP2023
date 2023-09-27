import { useContext } from 'react';

import CheckoutNavigationStep from 'components/Atoms/ChceckoutNavigationStep';
import { StepIndexes } from 'modules/Checkout';
import { CartContext } from 'utils/Providers/CartProvider/context';

import styles from './CheckoutNavigation.module.scss';

interface CheckoutNavigationProps {
  steps: ReadonlyArray<{
    title: string;
  }>;
  onStepChange: (step: number) => void;
  activeStepIndex: StepIndexes;
  isLoggedIn: boolean;
}

const CheckoutNavigation: React.FC<CheckoutNavigationProps> = ({
  steps,
  onStepChange,
  activeStepIndex,
  isLoggedIn,
}) => {
  const handleStepClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onStepChange(Number(event.currentTarget.dataset.step));
  };
  const { cart } = useContext(CartContext);
  return (
    <div className={styles.wrapper}>
      {steps.map((step, index) => (
        <CheckoutNavigationStep
          key={index}
          stepNumber={index + 1}
          isActive={index === activeStepIndex}
          isDone={index < activeStepIndex}
          stepName={step.title}
          setActive={handleStepClick}
          index={index}
          disabled={
            (index === 1 && isLoggedIn === false) || (index === 2 && !(cart?.deliveryAddress && cart?.deliveryMode))
          }
        />
      ))}
    </div>
  );
};

export default CheckoutNavigation;
