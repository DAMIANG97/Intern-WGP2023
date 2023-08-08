import type { Meta, StoryObj } from '@storybook/react';
import Logo from 'components/Header/Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const LogoBlack: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};

export const LogoWhite: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  render: () => (
    <div style={{ color: '#fff' }}>
      <Logo />
    </div>
  ),
};
