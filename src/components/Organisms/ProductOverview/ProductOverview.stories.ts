import type { Meta, StoryObj } from '@storybook/react';
import ProductOverview from 'components/Organisms/ProductOverview';
import { productMock } from 'mocks/productMock';

const meta: Meta<typeof ProductOverview> = {
  title: 'Components/ProductOverview',
  component: ProductOverview,
  tags: ['autodocs'],
  args: { product: productMock },
};

export default meta;

type Story = StoryObj<typeof ProductOverview>;

export const Primary: Story = {};
