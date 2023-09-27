import type { Meta, StoryObj } from '@storybook/react';
import CheckoutNavigationStep from 'components/Atoms/ChceckoutNavigationStep';

const meta: Meta<typeof CheckoutNavigationStep> = {
  title: 'Components/CheckoutNavigationStep',
  component: CheckoutNavigationStep,
  tags: ['autodocs'],
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof CheckoutNavigationStep>;

const active = () => {
  return;
};

export const Primary: Story = {
  render: () => (
    <div style={{ width: '194px', display: 'flex' }}>
      <CheckoutNavigationStep
        stepNumber={0}
        stepName="Login"
        isActive={true}
        isDone={true}
        setActive={active}
        index={0}
        disabled={false}
      />
    </div>
  ),
};

export const CheckoutNavigationStepDefault: Story = {};
