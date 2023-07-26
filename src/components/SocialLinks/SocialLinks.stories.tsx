import type { Meta, StoryObj } from '@storybook/react';
import SocialLinks from 'components/SocialLinks';

const meta: Meta<typeof SocialLinks> = {
  title: 'Components/SocialLinks',
  component: SocialLinks,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SocialLinks>;

export const SocialLinksDefault: Story = {
  parameters: {
    backgrounds: { default: 'Mine Shaft' },
  },
};

export const SocialLinksVertical: Story = {
  render: () => <SocialLinks vertical />,
  parameters: {
    backgrounds: { default: 'Mine Shaft' },
  },
};
