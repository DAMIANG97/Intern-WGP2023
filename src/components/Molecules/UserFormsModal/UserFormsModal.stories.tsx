import type { Meta, StoryObj } from '@storybook/react';
import UserFormsModal from 'components/Molecules/UserFormsModal';

const onCloseMock = () => {
  return;
};
const meta: Meta<typeof UserFormsModal> = {
  title: 'Components/UserFormsModal',
  component: UserFormsModal,
  tags: ['autodocs'],
  args: {
    isOpen: true,
    onClose: onCloseMock,
  },
};

export default meta;

type Story = StoryObj<typeof UserFormsModal>;

export const Primary: Story = {};
