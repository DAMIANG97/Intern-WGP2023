import type { Meta, StoryObj } from '@storybook/react';
import CartProduct from 'components/Molecules/CartProduct';
import { cartEntryMock } from 'mocks/cartEntryMock';

const meta: Meta<typeof CartProduct> = {
  title: 'Components/CartProduct',
  component: CartProduct,
  tags: ['autodocs'],
  args: { cartGUID: '1111', entry: cartEntryMock },
};

export default meta;

type Story = StoryObj<typeof CartProduct>;

export const Primary: Story = {};
