import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from 'components/SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'components/SearchBox',
  component: SearchBox,
  args: {
    searchHandler: (_, inputValue) => {
      console.debug('Storybook', inputValue);
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Primary: Story = {};
