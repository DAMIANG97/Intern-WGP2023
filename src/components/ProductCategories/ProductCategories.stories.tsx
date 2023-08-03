import type { Meta, StoryObj } from '@storybook/react';
import ProductCategories from 'components/ProductCategories';
import { categoriesMock } from 'mocks/mocks';

const meta: Meta<typeof ProductCategories> = {
  title: 'Components/ProductCategories',
  component: ProductCategories,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductCategories>;

export const Primary: Story = {
  render: () => <ProductCategories categoriesContent={categoriesMock} />,
};
