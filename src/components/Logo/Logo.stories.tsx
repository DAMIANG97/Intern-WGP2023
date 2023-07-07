import type { Meta, StoryObj } from '@storybook/react';
import Logo from 'components/Logo';

const meta: Meta<typeof Logo> = {
  title: 'Components/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [
        { name: 'Mine Shaft', value: '#212121' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const LogoBlack: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
  render: () => (
    <div style={{ color: '#000' }}>
      <Logo />
    </div>
  ),
};

export const LogoWhite: Story = {
  parameters: {
    backgrounds: { default: 'Mine Shaft' },
  },
  render: () => (
    <div style={{ color: '#fff' }}>
      <Logo />
    </div>
  ),
};
