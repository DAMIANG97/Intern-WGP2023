import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react';
import FormInputSelect from 'components/Molecules/FormInputSelect';

const options = [
  {
    isocode: 'a',
    name: 'Poland',
  },
  { isocode: 'b', name: 'England' },
  { isocode: 'c', name: 'Sweden' },
  { isocode: 'd', name: 'Germany' },
];
const meta: Meta<typeof FormInputSelect> = {
  title: 'Components/form/FormInputSelect',
  component: FormInputSelect,
  tags: ['autodocs'],
  decorators: [
    () => (
      <FormInputSelect
        register={useForm().register}
        errors={useForm().formState.errors}
        required
        name="Countries"
        optionsArray={options}
      />
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FormInputSelect>;

export const Primary: Story = {};
