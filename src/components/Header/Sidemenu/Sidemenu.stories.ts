import type { Meta, StoryObj } from '@storybook/react';
import Sidemenu from 'components/Header/Sidemenu';

const meta: Meta<typeof Sidemenu> = {
  title: 'Components/Sidemenu',
  component: Sidemenu,
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
type Story = StoryObj<typeof Sidemenu>;

export const SidemenuDesktop: Story = {
  parameters: {
    backgrounds: { default: 'Mine Shaft' },
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
