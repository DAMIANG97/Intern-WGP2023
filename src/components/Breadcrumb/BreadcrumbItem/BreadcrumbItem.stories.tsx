import type { Meta, StoryObj } from '@storybook/react';
import BreadcrumbItem from 'components/Breadcrumb';

const meta: Meta<typeof BreadcrumbItem> = {
  title: 'Components/BreadcrumbItem',
  component: BreadcrumbItem,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'dark', value: '#212121' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BreadcrumbItem>;

export const BreadcrumbItemBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const BreadcrumbItemWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
