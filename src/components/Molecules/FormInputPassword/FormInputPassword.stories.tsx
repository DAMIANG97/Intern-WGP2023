import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';
import FormInputText from 'components/Molecules/FormInputPassword';
import FormInputPassword from 'components/Molecules/FormInputPassword';

const meta: Meta<typeof FormInputPassword> = {
  title: 'Components/form/FormInputPassword',
  component: FormInputText,
  tags: ['autodocs'],
  decorators: [
    () => (
      <FormInputPassword name="First Name" register={useForm().register} errors={useForm().formState.errors} required />
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FormInputPassword>;

export const Primary: Story = {};
