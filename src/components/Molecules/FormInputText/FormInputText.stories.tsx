import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';
import FormInputText from 'components/Molecules/FormInputText';

const meta: Meta<typeof FormInputText> = {
  title: 'Components/form/FormInputText',
  component: FormInputText,
  tags: ['autodocs'],
  decorators: [
    () => (
      <FormInputText name="First Name" register={useForm().register} errors={useForm().formState.errors} required />
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FormInputText>;

export const Primary: Story = {};
