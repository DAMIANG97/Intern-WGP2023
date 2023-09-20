import type { Meta, StoryObj } from '@storybook/react';
import ProductQuantityInput from 'components/Molecules/ProductQuantityInput';
import { cartEntryMock } from 'mocks/cartEntryMock';

const meta: Meta<typeof ProductQuantityInput> = {
  title: 'Components/ProductQuantityInput',
  component: ProductQuantityInput,
  tags: ['autodocs'],
  args: { entry: cartEntryMock, user: 'anonymous' },
};

export default meta;

type Story = StoryObj<typeof ProductQuantityInput>;

export const Primary: Story = {};
