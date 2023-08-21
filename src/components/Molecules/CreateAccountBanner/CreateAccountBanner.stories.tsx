import type { Meta, StoryObj } from '@storybook/react';
import CreateAccountBanner from 'components/Molecules/CreateAccountBanner';

const meta: Meta<typeof CreateAccountBanner> = {
  title: 'Components/CreateAccountBanner',
  component: CreateAccountBanner,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreateAccountBanner>;

export const CreateAccountBannerBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const CreateAccountBannerWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
