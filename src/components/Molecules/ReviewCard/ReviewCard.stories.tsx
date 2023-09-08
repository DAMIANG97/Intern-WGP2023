import type { Meta, StoryObj } from '@storybook/react';
import ReviewCard from 'components/Molecules/ReviewCard';

const review = {
  comment:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus ipsum saepe expedita vitae, dolore eum veritatis pariatur illo, porro reiciendis quisquam minus provident quaerat similique tempore eos atque cumque.',
  date: '2023-06-13T13:32:06+0000',
  headline: 'I would prefer a product with extra features.',
  id: '8796179431473',
  principal: {
    name: 'Kenneth Reviewer',
    uid: 'keenreviewer1@hybris.com',
  },
  rating: 2,
};

const meta: Meta<typeof ReviewCard> = {
  title: 'Components/ReviewCard',
  component: ReviewCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ReviewCard>;

export const Primary: Story = {
  render: () => (
    <div style={{ width: '1200px' }}>
      <ReviewCard {...review} />
    </div>
  ),
};
