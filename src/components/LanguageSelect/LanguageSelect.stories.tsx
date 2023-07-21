import type { Meta, StoryObj } from '@storybook/react';
import LanguageSelect from 'components/LanguageSelect';

const meta: Meta<typeof LanguageSelect> = {
  title: 'Components/LanguageSelect',
  component: LanguageSelect,
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
type Story = StoryObj<typeof LanguageSelect>;

export const SelectLanguageBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const SelectLanguageWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
