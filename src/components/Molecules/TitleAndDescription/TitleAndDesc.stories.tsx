import type { Meta, StoryObj } from '@storybook/react';
import TitleAndDescription from 'components/Molecules/TitleAndDescription';

const meta: Meta<typeof TitleAndDescription> = {
  title: 'Components/TitleAndDescription',
  component: TitleAndDescription,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'dark', value: '#212121' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TitleAndDescription>;

export const TitleAndDescriptionBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    title: 'Cameras store collection',
    description: 'Find the best camaras you need in your amatour and professional photography',
  },
};
