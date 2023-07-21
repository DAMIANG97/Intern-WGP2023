import type { Meta, StoryObj } from '@storybook/react';
import CurrencySelect from 'components/CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
  title: 'Components/CurrencySelect',
  component: CurrencySelect,
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
type Story = StoryObj<typeof CurrencySelect>;

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
