import { useState } from 'react';

import CheckoutNavigationStep from 'components/Atoms/ChceckoutNavigationStep';

import styles from './CheckoutNavigation.module.scss';

interface CheckoutNavigationProps {
  steps: ReadonlyArray<{
    title: string;
  }>;
}
const CheckoutNavigation: React.FC<CheckoutNavigationProps> = ({ steps }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleStepClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement | null;

    if (target !== null) {
      const stepAttribute = target.getAttribute('data-step');

      if (stepAttribute !== null) {
        const step = +stepAttribute;

        if (!isNaN(step)) {
          setActiveStepIndex(step);
        }
      }
    }
  };

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
          data-step={index}
        />
      ))}
    </div>
  );
};

export default CheckoutNavigation;
