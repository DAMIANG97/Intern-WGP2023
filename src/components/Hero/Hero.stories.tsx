import type { Meta, StoryObj } from '@storybook/react';
import Hero from 'components/Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
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
type Story = StoryObj<typeof Hero>;

export const HeroBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    title: 'Cameras store collection',
    desc: 'Find the best camaras you need in your amatour and professional photography',
  },
};

export const HeroWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
  args: {
    title: 'Cameras store collection',
    desc: 'Find the best camaras you need in your amatour and professional photography',
  },
};
