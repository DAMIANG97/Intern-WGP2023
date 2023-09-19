import type { Meta, StoryObj } from '@storybook/react';
import OrderTotalSummary from 'components/Molecules/OrderTotalSummary';

const meta: Meta<typeof OrderTotalSummary> = {
  title: 'Components/OrderTotalSummary',
  component: OrderTotalSummary,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof OrderTotalSummary>;

export const OrderTotalSummaryBlack: Story = {
  args: {
    total: '$18 000',
    subTotal: '$75000',
  },
};
