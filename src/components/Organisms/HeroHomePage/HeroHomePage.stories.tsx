import type { Meta, StoryObj } from '@storybook/react';
import HeroHomePage from 'components/Organisms/HeroHomePage';
import { footerContentMock } from 'mocks/footerContentMock';
import tempArray from 'mocks/mocks';

const meta: Meta<typeof HeroHomePage> = {
  title: 'Components/HeroHomePage',
  component: HeroHomePage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroHomePage>;

export const HeroHomePageDesktop: Story = {
  args: {
    heroContent: tempArray,
    footerContent: footerContentMock,
  },
};

export const HeroHomePageMobile: Story = {
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
