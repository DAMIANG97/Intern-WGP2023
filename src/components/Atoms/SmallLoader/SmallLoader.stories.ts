import type { Meta, StoryObj } from '@storybook/react';
import SmallLoader from 'components/Atoms/SmallLoader';

const meta: Meta<typeof SmallLoader> = {
  title: 'Components/SmallLoader',
  component: SmallLoader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SmallLoader>;

export const Primary: Story = {};
