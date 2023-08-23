import type { Meta, StoryObj } from '@storybook/react';
import Hero from 'components/Organisms/Hero';
import { CATEGORY_ID, HERO_MOCKS } from 'mocks/heroMocks';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  args: {
    heroContent: HERO_MOCKS,
    categoryId: CATEGORY_ID,
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const HeroDesktop: Story = {};
