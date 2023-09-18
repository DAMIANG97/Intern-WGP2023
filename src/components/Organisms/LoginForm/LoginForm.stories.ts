import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from 'components/Organisms/LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {};
