import type { Meta, StoryObj } from '@storybook/react';
import H1 from 'components/Atoms/H1';

const meta: Meta<typeof H1> = {
  title: 'Components/H1',
  component: H1,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof H1>;

export const H1Default: Story = {
  parameters: {
    backgrounds: { default: 'Mine Shaft' },
  },
  args: {
    children: 'H1',
  },
};
