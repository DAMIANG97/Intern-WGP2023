import type { Meta, StoryObj } from '@storybook/react';
import TextComponent from 'components/Atoms/TextComponent';

const meta: Meta<typeof TextComponent> = {
  title: 'Components/TextComponent',
  component: TextComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextComponent>;

export const TextComponentBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    children:
      "We'll email you a voucher worth £10 off your first order over £50. By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.",
  },
};

export const TextComponentWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
  args: {
    children:
      "We'll email you a voucher worth £10 off your first order over £50. By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.",
  },
};
