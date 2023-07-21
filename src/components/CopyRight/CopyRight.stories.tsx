import type { Meta, StoryObj } from '@storybook/react';
import Copyright from 'components/CopyRight';

const meta: Meta<typeof Copyright> = {
  title: 'Components/Copyright',
  component: Copyright,
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
type Story = StoryObj<typeof Copyright>;

export const CopyrightBlack: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  args: {
    children: 'Copyring © Viachas Kul. All right reserved.',
  },
};

export const CopyrightWhite: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
  args: {
    children: 'Copyring © Viachas Kul. All right reserved.',
  },
};
