import type { Meta, StoryObj } from '@storybook/react';
import MenuListOfLinks from 'components/Header/Menu/MenuListOfLinks';
import { menuContentMock } from 'mocks/mocks';

const meta: Meta<typeof MenuListOfLinks> = {
  title: 'Components/MenuListOfLinks',
  component: MenuListOfLinks,
  tags: ['autodocs'],
  args: { menuContent: menuContentMock },
};

export default meta;
type Story = StoryObj<typeof MenuListOfLinks>;

export const Primary: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Mobile: Story = {
  parameters: {
    backgrounds: { default: 'white' },
    viewport: {
      defaultViewport: 'mobile2',
    },
    layout: 'fullscreen',
  },
};
