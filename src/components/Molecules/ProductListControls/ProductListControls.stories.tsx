import type { Meta, StoryObj } from '@storybook/react';
import ProductsListControls from 'components/Molecules/ProductListControls';
import ProductListControls from 'components/Molecules/ProductListControls';
import { productMock, productMockFunction } from 'mocks/productsMock';

const meta: Meta<typeof ProductsListControls> = {
  title: 'Components/ProductsListControls',
  component: ProductsListControls,
  tags: ['autodocs'],
  args: {},
};

export default meta;

type Story = StoryObj<typeof ProductListControls>;

export const Primary: Story = {
  render: () => (
    <ProductListControls
      products={productMock}
      selectedOption="Relevance"
      sortSubmitHandler={productMockFunction}
      smallLayoutHandler={productMockFunction}
      bigLayoutHandler={productMockFunction}
      productsPerPage="10"
      toggleVisible={productMockFunction}
    />
  ),
};
