import type { Meta, StoryObj } from '@storybook/react';
import ProductItem from 'components/Molecules/ProductItem';

const meta: Meta<typeof ProductItem> = {
  title: 'Components/ProductItem',
  component: ProductItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductItem>;

export const Primary: Story = {
  render: () => (
    <ProductItem
      key="item1"
      img="https://fotoforma.pl/environment/cache/images/500_500_productGfx_21838/Aparat-cyfrowy-Sony-A6600---obiektyw-18-135mm-czarny-ILCE6600MB-SEL18135.jpg"
      url="/"
      name="Canon EOS 400D"
      price="$649.00"
      rating={3.5}
      reviews={4}
    />
  ),
};
