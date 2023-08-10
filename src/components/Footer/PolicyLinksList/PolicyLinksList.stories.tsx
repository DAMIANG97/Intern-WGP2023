import type { Meta, StoryObj } from '@storybook/react';
import PolicyLinksList from 'components/Footer/PolicyLinksList';
import { footerContentMock } from 'mocks/footerContentMock';

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
  render: () => <PolicyLinksList policyLinks={footerContentMock.policyLinks} />,

  parameters: {
    backgrounds: { default: 'dark' },
  },
};
