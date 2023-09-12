import type { Meta, StoryObj } from '@storybook/react';
import FormErrorAlert from 'components/Atoms/FormErrorAlert';

const meta: Meta<typeof FormErrorAlert> = {
  title: 'Components/form/FormErrorAlert',
  component: FormErrorAlert,
  tags: ['autodocs'],
  args: { message: 'This field is required', name: 'First Name' },
};

export default meta;

type Story = StoryObj<typeof FormErrorAlert>;

export const Primary: Story = {};
