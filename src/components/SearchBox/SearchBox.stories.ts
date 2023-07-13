import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from 'components/SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'components/SearchBox',
  component: SearchBox,
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Primary: Story = {};
