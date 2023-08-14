import type { Meta, StoryObj } from '@storybook/react';
import CurrencySelect from 'components/Molecules/CurrencySelect';
import { currencyMock } from 'mocks/localeOptionsMock';

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
