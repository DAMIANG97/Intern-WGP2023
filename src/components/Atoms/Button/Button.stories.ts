import type { Meta, StoryObj } from '@storybook/react';
import Button from 'components/Atoms/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};
