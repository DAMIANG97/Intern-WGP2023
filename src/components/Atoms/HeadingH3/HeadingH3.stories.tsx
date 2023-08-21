import type { Meta, StoryObj } from '@storybook/react';
import HeadingH3 from 'components/Atoms/HeadingH3';

const meta: Meta<typeof HeadingH3> = {
  title: 'Components/HeadingH3',
  component: HeadingH3,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeadingH3>;

export const HeadingH3Black: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    children: 'Create account for £10 off',
  },
};

export const HeadingH3White: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
  args: {
    children: 'Create account for £10 off',
  },
};
