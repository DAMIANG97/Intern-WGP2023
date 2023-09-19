import type { Meta, StoryObj } from '@storybook/react';
import CartSummary from 'components/Organisms/CartSummary';

const meta: Meta<typeof CartSummary> = {
  title: 'Components/CartSummary',
  component: CartSummary,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CartSummary>;

export const Primary: Story = {};
