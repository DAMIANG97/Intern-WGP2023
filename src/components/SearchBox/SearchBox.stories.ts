import type { Meta, StoryObj } from '@storybook/react';
import SearchBox from 'components/SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'components/SearchBox',
  component: SearchBox,
  args: {
    searchHandler: (e, inputValue) => {
      console.log(inputValue);
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Primary: Story = {};
