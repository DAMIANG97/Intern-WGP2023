import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from 'components/Breadcrumb';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
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
type Story = StoryObj<typeof Breadcrumbs>;

export const BreadcrumbsBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const BreadcrumbsWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
