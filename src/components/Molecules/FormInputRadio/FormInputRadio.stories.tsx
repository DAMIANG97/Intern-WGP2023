import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';
import FormInputRadio from 'components/Molecules/FormInputRadio';

const meta: Meta<typeof FormInputRadio> = {
  title: 'Components/form/FormInputRadio',
  component: FormInputRadio,
  tags: ['autodocs'],
  decorators: [() => <FormInputRadio register={useForm().register} errors={useForm().formState.errors} required />],
};

export default meta;

type Story = StoryObj<typeof FormInputRadio>;

export const Primary: Story = {};
