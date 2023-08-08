import type { Meta, StoryObj } from '@storybook/react';
import CurrencySelect from 'components/CurrencySelect';
import { currencyMock } from 'mocks/mocks';

const meta: Meta<typeof CurrencySelect> = {
  title: 'Components/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
  args: { currencyOptions: currencyMock },
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const SelectCurrencyBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const SelectCurrencyWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
