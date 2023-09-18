import type { Meta, StoryObj } from '@storybook/react';
import FormTitle from 'components/Atoms/FormTitle';
import FormInputLabel from 'components/Atoms/FormTitle';

const meta: Meta<typeof FormInputLabel> = {
  title: 'Components/FormTitle',
  component: FormTitle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormTitle>;

export const Primary: Story = {};
