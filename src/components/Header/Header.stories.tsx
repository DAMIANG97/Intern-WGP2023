import type { Meta, StoryObj } from '@storybook/react';
import Header from 'components/Header';
import { localeOptionsMock } from 'mocks/mocks';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    localeOptions: localeOptionsMock,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const HeaderMobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
export const HeaderDesktop: Story = {};
