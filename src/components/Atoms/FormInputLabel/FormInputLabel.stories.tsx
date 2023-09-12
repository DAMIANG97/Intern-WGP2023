import type { Meta, StoryObj } from '@storybook/react';
import FormInputLabel from 'components/Atoms/FormInputLabel';

const meta: Meta<typeof FormInputLabel> = {
  title: 'Components/form/FormInputLabel',
  component: FormInputLabel,
  tags: ['autodocs'],
  args: { required: true, children: <input type="text" />, name: 'First Name' },
};

export default meta;

type Story = StoryObj<typeof FormInputLabel>;

export const Primary: Story = {};
