import type { Meta, StoryObj } from '@storybook/react';
import CartItemsList from 'components/Molecules/CartItemsList';
import { cartEntryMock } from 'mocks/cartEntryMock';

const meta: Meta<typeof CartItemsList> = {
  title: 'Components/CartItemList',
  component: CartItemsList,
  tags: ['autodocs'],
  args: { entry: cartEntryMock },
};

export default meta;

type Story = StoryObj<typeof CartItemsList>;

export const Primary: Story = {};
