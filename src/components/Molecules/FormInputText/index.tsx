import React, { FunctionComponent } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import FormErrorAlert from 'components/Atoms/FormErrorAlert';
import FormInputLabel from 'components/Atoms/FormInputLabel';

import styles from './FormInputText.module.scss';

interface FormInputTextProps {
  name: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  autoComplete?: string;
}

const TAG = 'FormInputText';

const MAX_LENGHT = 200;

const FormInputText: FunctionComponent<FormInputTextProps> = ({
  name,
  required = false,
  errors,
  register,
  autoComplete,
}) => {
  const { t } = useTranslation('checkout');
  return (
    <FormInputLabel name={name} required={required}>
      <input
        autoComplete={autoComplete}
        className={styles.input}
        aria-describedby={`${name}-${t('components.form.field-error')}`}
        type="text"
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-required={required}
        maxLength={MAX_LENGHT}
        {...register(name, { required: required ? t('components.form.required-alert') : required })}
      />
      {errors[name] && (
        <FormErrorAlert
          className={styles['error-message']}
          name={name}
          message={`${errors[name]?.message}` ?? t('components.form.required-alert')}
        />
      )}
    </FormInputLabel>
  );
};
FormInputText.displayName = TAG;

export default FormInputText;
