import type { Meta, StoryObj } from '@storybook/react';
import CreateAccountForm from 'components/Organisms/CreateAccountForm';

const meta: Meta<typeof CreateAccountForm> = {
  title: 'Components/CreateAccountForm',
  component: CreateAccountForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CreateAccountForm>;

export const Primary: Story = {};
