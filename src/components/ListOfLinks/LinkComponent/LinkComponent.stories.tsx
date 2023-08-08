import type { Meta, StoryObj } from '@storybook/react';
import LinkComponent from 'components/ListOfLinks/LinkComponent';
import { menuContentMock } from 'mocks/mocks';

const meta: Meta<typeof LinkComponent> = {
  title: 'Components/Link',
  component: LinkComponent,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LinkComponent>;

export const Desktop: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    title: 'Home',
    href: '/',
  },
};

export const DesktopActive: Story = {
  render: () => <LinkComponent aria-current="true" href="#" link={menuContentMock[0]} linkPrefix="/" />,
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
  args: {
    title: 'Home',
    href: '/',
  },
};

export const MobileActive: Story = {
  render: () => <LinkComponent aria-current="true" href="#" link={menuContentMock[0]} linkPrefix="/" />,
  parameters: {
    backgrounds: { default: 'white' },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
