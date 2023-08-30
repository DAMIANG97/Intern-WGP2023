import type { Meta, StoryObj } from '@storybook/react';
import ProductSlider from 'components/Molecules/ProductSlider';
import { productMock } from 'mocks/productMock';

const meta: Meta<typeof ProductSlider> = {
  title: 'Components/ProductSlider',
  component: ProductSlider,
  tags: ['autodocs'],
  args: { images: productMock.images },
};

export default meta;

type Story = StoryObj<typeof ProductSlider>;

export const Primary: Story = {};
