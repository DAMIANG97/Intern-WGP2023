import type { Meta, StoryObj } from '@storybook/react';
import Sidemenu from 'components/Molecules/Sidemenu';
import { localeOptionsMock } from 'mocks/localeOptionsMock';

const meta: Meta<typeof Sidemenu> = {
  title: 'Components/Sidemenu',
  component: Sidemenu,
  tags: ['autodocs'],
  args: {
    localeOptions: localeOptionsMock,
  },
};

export default meta;
type Story = StoryObj<typeof Sidemenu>;

export const SidemenuDesktop: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const SidemenuMobile: Story = {
  parameters: {
    backgrounds: { default: 'white' },
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
