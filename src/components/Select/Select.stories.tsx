import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import Select, { SelectProps } from 'components/Select';

const Wrapper = (props: SelectProps) => {
  const defaultState = props.options ? props.options[0] : '';
  const [selectedOption, setSelectedOption] = useState<string | null>(defaultState);
  return <Select {...props} setSelectedOption={setSelectedOption} selectedOption={selectedOption} />;
};

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Wrapper,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'dark', value: '#212121' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    options: ['English', 'Japanese', 'German', 'Chinese'],
  },
};

export const SelectWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
  args: {
    options: ['English', 'Japanese', 'German', 'Chinese'],
  },
};
