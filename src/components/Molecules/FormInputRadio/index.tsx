import React, { ComponentProps, FunctionComponent } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import FormErrorAlert from 'components/Atoms/FormErrorAlert';

import styles from './FormInputRadio.module.scss';

interface FormInputRadioProps extends ComponentProps<'input'> {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const TAG = 'FormInputRadio';

const FormInputRadio: FunctionComponent<FormInputRadioProps> = ({ register, errors, required, children, ...props }) => {
  const { t } = useTranslation();
  return (
    <>
      <label className={styles.label}>
        <input
          {...props}
          className={styles.input}
          aria-describedby={`${t('components.form.delivery-method')}-${t('components.form.field-error')}`}
          type="radio"
          {...register(t('components.form.delivery-method'), {
            required: required ? t('components.form.required-alert') : required,
          })}
        />
        {children}
      </label>
      {errors['Delivery Method'] && (
        <FormErrorAlert
          name={t('components.form.delivery-method')}
          message={`${errors[t('components.form.delivery-method')]?.message}` ?? t('components.form.required-alert')}
        />
      )}
    </>
  );
};

FormInputRadio.displayName = TAG;

export default FormInputRadio;
