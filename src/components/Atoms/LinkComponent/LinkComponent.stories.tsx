import type { Meta, StoryObj } from '@storybook/react';
import LinkComponent from 'components/Atoms/LinkComponent';

const meta: Meta<typeof LinkComponent> = {
  title: 'Components/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  args: {
    children: 'Home',
    href: '/',
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof LinkComponent>;

export const Desktop: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DesktopActive: Story = {
  render: () => (
    <LinkComponent aria-current="true" href="#">
      Home
    </LinkComponent>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Mobile: Story = {
  parameters: {
    backgrounds: { default: 'white' },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileActive: Story = {
  render: () => (
    <LinkComponent aria-current="true" href="#">
      Home
    </LinkComponent>
  ),
  parameters: {
    backgrounds: { default: 'white' },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
