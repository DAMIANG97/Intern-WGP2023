import type { Meta, StoryObj } from '@storybook/react';
import ProductDescription from 'components/Organisms/ProductDescription';
import { productMock } from 'mocks/productMock';

const meta: Meta<typeof ProductDescription> = {
  title: 'Components/ProductDescription',
  component: ProductDescription,
  tags: ['autodocs'],
  args: { product: productMock },
};

export default meta;

type Story = StoryObj<typeof ProductDescription>;

export const Primary: Story = {};
