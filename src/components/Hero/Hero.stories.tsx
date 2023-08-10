import type { Meta, StoryObj } from '@storybook/react';
import Hero from 'components/Hero';
import { footerContentMock } from 'mocks/footerContentMock';
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

export const HeroDesktop: Story = {
  args: {
    heroContent: tempArray,
    footerContent: footerContentMock,
  },
};

export const HeroMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  args: {
    heroContent: tempArray,
    footerContent: footerContentMock,
  },
};
