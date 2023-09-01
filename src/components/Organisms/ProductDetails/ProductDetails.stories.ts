import type { Meta, StoryObj } from '@storybook/react';
import ProductDetails from 'components/Organisms/ProductDetails';
import { productMock } from 'mocks/productMock';

const meta: Meta<typeof ProductDetails> = {
  title: 'Components/ProductDetails',
  component: ProductDetails,
  tags: ['autodocs'],
  args: { product: productMock },
};

export default meta;

type Story = StoryObj<typeof ProductDetails>;

export const Primary: Story = {};
