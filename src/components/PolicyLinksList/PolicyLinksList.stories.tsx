import type { Meta, StoryObj } from '@storybook/react';
import PolicyLinksList from 'components/PolicyLinksList';

const meta: Meta<typeof PolicyLinksList> = {
  title: 'Components/PolicyLinksList',
  component: PolicyLinksList,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: '#212121' }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PolicyLinksList>;

export const Primary: Story = {
  render: () => <PolicyLinksList />,

  parameters: {
    backgrounds: { default: 'dark' },
  },
};
