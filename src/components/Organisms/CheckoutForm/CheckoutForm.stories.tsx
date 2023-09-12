import type { Meta, StoryObj } from '@storybook/react';
import CheckoutForm from 'components/Organisms/CheckoutForm';

const meta: Meta<typeof CheckoutForm> = {
  title: 'Components/form/CheckoutForm',
  component: CheckoutForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CheckoutForm>;

export const Primary: Story = {};
