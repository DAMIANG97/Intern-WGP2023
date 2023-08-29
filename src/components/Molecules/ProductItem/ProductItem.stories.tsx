import type { Meta, StoryObj } from '@storybook/react';
import ProductItem from 'components/Molecules/ProductItem';

const product = {
  code: 'item1',
  image:
    'https://fotoforma.pl/environment/cache/images/500_500_productGfx_21838/Aparat-cyfrowy-Sony-A6600---obiektyw-18-135mm-czarny-ILCE6600MB-SEL18135.jpg',
  url: '/',
  name: 'Canon EOS 400D',
  price: '$649.00',
  rating: 3.5,
  reviews: 4,
};

const meta: Meta<typeof ProductItem> = {
  title: 'Components/ProductItem',
  component: ProductItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ProductItem>;

export const Primary: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <ProductItem
        name={product.name}
        url={product.url}
        image={product.image}
        rating={product.rating}
        code={product.code}
        price={product.price}
      />
    </div>
  ),
};
