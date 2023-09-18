import React, { ComponentProps, FunctionComponent } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import FormErrorAlert from 'components/Atoms/FormErrorAlert';
import FormInputLabel from 'components/Atoms/FormInputLabel';

import styles from './FormInputPassword.module.scss';

interface FormInputPasswordProps extends ComponentProps<'input'> {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  validate?: (arg0: FieldValues, arg1: FieldValues) => true | string;
  name: string;
}

const TAG = 'FormInputPassword';

const MAX_LENGHT = 200;

const FormInputPassword: FunctionComponent<FormInputPasswordProps> = ({
  name,
  required = false,
  errors,
  register,
  validate,
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <FormInputLabel name={name} required={required}>
      <input
        {...props}
        className={styles.input}
        aria-describedby={`${name}-${t('components.form.field-error')}`}
        type="password"
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-required={required}
        maxLength={MAX_LENGHT}
        {...register(name, {
          required: required ? t('components.form.required-alert') : required,
          validate: validate ? validate : undefined,
        })}
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
FormInputPassword.displayName = TAG;

export default FormInputPassword;
