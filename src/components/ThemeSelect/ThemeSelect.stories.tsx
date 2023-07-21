import type { Meta, StoryObj } from '@storybook/react';
import ThemeSelect from 'components/ThemeSelect';

const meta: Meta<typeof ThemeSelect> = {
  title: 'Components/ThemeSelect',
  component: ThemeSelect,
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
type Story = StoryObj<typeof ThemeSelect>;

export const ThemeSelectBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const ThemeSelectWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
