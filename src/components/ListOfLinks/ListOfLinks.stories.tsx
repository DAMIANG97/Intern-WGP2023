import type { Meta, StoryObj } from '@storybook/react';
import ListOfLinks from 'components/ListOfLinks';
import { menuContentMock } from 'mocks/mocks';

const meta: Meta<typeof ListOfLinks> = {
  title: 'Components/ListOfLinks',
  component: ListOfLinks,
  tags: ['autodocs'],
  args: { menuContent: menuContentMock },
};

export default meta;
type Story = StoryObj<typeof ListOfLinks>;

export const Primary: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const Mobile: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
