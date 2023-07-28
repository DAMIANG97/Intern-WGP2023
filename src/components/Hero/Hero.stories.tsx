import type { Meta, StoryObj } from '@storybook/react';
import Hero from 'components/Hero';
import tempArray from 'mocks/mocks';

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
    heroContent: tempArray,
  },
};

export const HeroWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
  args: {
    heroContent: tempArray,
  },
};
