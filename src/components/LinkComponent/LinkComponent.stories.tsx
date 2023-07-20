import type { Meta, StoryObj } from '@storybook/react';
import LinkComponent from 'components/LinkComponent';

const meta: Meta<typeof LinkComponent> = {
  title: 'Components/Link',
  component: LinkComponent,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      values: [
        { name: 'dark', value: '#212121' },
        { name: 'green', value: '#7db800' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof LinkComponent>;

export const Desktop: Story = {
  render: () => <LinkComponent href="#">Home</LinkComponent>,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    children: 'Home',
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
  args: {
    children: 'Home',
  },
};

export const Mobile: Story = {
  render: () => <LinkComponent href="#">Home</LinkComponent>,
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
