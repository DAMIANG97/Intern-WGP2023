import type { Meta, StoryObj } from '@storybook/react';
import Input from 'components/Atoms/Input';

const meta: Meta<typeof Input> = {
  title: 'components/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {};
