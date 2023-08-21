import type { Meta, StoryObj } from '@storybook/react';
import CreateAccount from 'components/Organisms/CreateAccountAdvertisment';

const meta: Meta<typeof CreateAccount> = {
  title: 'Components/CreateAccount',
  component: CreateAccount,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CreateAccount>;

export const CreateAccountDesktop: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
export const CreateAccountrMobile: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};
