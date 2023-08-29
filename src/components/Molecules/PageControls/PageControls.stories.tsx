import type { Meta, StoryObj } from '@storybook/react';
import PageControls from 'components/Molecules/PageControls';
import { productMockFunction } from 'mocks/productsMock';

const meta: Meta<typeof PageControls> = {
  title: 'Components/PageControls',
  component: PageControls,
  tags: ['autodocs'],
  args: {},
};

export default meta;

type Story = StoryObj<typeof PageControls>;

export const Primary: Story = {
  render: () => (
    <PageControls
      numberOfPages={3}
      numberOfProductsSelectHandler={productMockFunction}
      pageSizeOption="4"
      leftArrowHandler={productMockFunction}
      rightArrowHandler={productMockFunction}
      pageNumberHandler={productMockFunction}
      currentPage={0}
    />
  ),
};
