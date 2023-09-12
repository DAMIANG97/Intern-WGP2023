import React, { FunctionComponent, ReactElement } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import FormErrorAlert from 'components/Atoms/FormErrorAlert';
import FormInputLabel from 'components/Atoms/FormInputLabel';
import { Countries } from 'utils/Hybris/Checkout/getCountries';
import { TitleProps } from 'utils/Hybris/Checkout/getTitles';

import styles from './FormInputSelect.module.scss';

interface FormInputSelectProps {
  name: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: FieldErrors<FieldValues>;
  optionsArray: Countries['countries'] | TitleProps['titles'];
  autoComplete?: string;
}

const TAG = 'FormInputSelect';

function getOptions(array: Countries['countries'] | TitleProps['titles']): ReactElement[] {
  return array.map((item) => (
    <option className={styles.option} key={item.name} value={item.name}>
      {item.name}
    </option>
  ));
}

const FormInputSelect: FunctionComponent<FormInputSelectProps> = ({
  name,
  register,
  required = false,
  errors,
  optionsArray,
  autoComplete,
}) => {
  const { t } = useTranslation('checkout');
  function getDefaultOptionText(name: string): string {
    return `${t('components.form.placeholders.select')} ${
      name === t('components.form.fields.country')
        ? t('components.form.placeholders.country')
        : t('components.form.placeholders.title')
    }`;
  }
  return (
    <>
      <FormInputLabel name={name} required={required}>
        <select
          autoComplete={autoComplete}
          className={styles.select}
          aria-required={required}
          aria-describedby={`${name}-${t('components.form.field-error')}`}
          defaultValue=""
          aria-invalid={errors[name] ? 'true' : 'false'}
          {...register(name, {
            required: required ? t('components.form.required-alert') : required,
          })}>
          <option className={styles.option} disabled hidden value="">
            {getDefaultOptionText(name)}
          </option>
          {getOptions(optionsArray)}
        </select>
        {errors[name] && (
          <FormErrorAlert
            className={styles['error-message']}
            name={name}
            message={`${errors[name]?.message}` ?? t('components.form.required-alert')}
          />
        )}
      </FormInputLabel>
    </>
  );
};

FormInputSelect.displayName = TAG;

export default FormInputSelect;
