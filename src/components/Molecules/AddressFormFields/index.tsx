import React, { FunctionComponent, useContext } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import FormInputSelect from 'components/Molecules/FormInputSelect';
import FormInputText from 'components/Molecules/FormInputText';
import { Countries } from 'utils/Hybris/Checkout/getCountries';
import { TitleProps } from 'utils/Hybris/Checkout/getTitles';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';

import styles from './AddressFormFields.module.scss';

interface AddressFormFieldsProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

interface SelectInputFormFieldObject {
  name: string;
  type: 'select';
  required: boolean;
  options: TitleProps['titles'] | Countries['countries'];
  autoComplete?: string;
}
interface TextInputFormFieldObject {
  name: string;
  type: 'text';
  required: boolean;
  autoComplete: string;
}
const TAG = 'AddressFormFields';

const AddressFormFields: FunctionComponent<AddressFormFieldsProps> = ({ register, errors }) => {
  const { titles, countries } = useContext(CheckoutContext);
  const { t } = useTranslation('checkout');

  if (countries && titles) {
    const formFields: (TextInputFormFieldObject | SelectInputFormFieldObject)[] = [
      {
        name: t('components.form.fields.country'),
        type: 'select',
        required: true,
        options: countries.countries,
        autoComplete: 'country',
      },
      { name: t('components.form.fields.title'), type: 'select', required: true, options: titles.titles },
      { name: t('components.form.fields.first-name'), type: 'text', required: true, autoComplete: 'given-name' },
      { name: t('components.form.fields.last-name'), type: 'text', required: true, autoComplete: 'family-name' },
      { name: t('components.form.fields.address1'), type: 'text', required: true, autoComplete: 'address-line1' },
      { name: t('components.form.fields.address2'), type: 'text', required: false, autoComplete: 'address-line2' },
      { name: t('components.form.fields.city'), type: 'text', required: true, autoComplete: 'address-level2' },
    ];

    return (
      <>
        {formFields.map((field) => {
          if (field.type === 'text') {
            return (
              <FormInputText
                key={field.name}
                name={field.name}
                required={field.required}
                register={register}
                errors={errors}
                autoComplete={field.autoComplete ?? 'off'}
              />
            );
          }
          if (field.type === 'select') {
            return (
              <FormInputSelect
                key={field.name}
                name={field.name}
                required={field.required}
                register={register}
                errors={errors}
                optionsArray={field.options}
                autoComplete={field.autoComplete ?? 'off'}
              />
            );
          }
        })}
      </>
    );
  }
  return <span className={styles.error}>Server error</span>;
};

AddressFormFields.displayName = TAG;

export default AddressFormFields;
