import React, { FunctionComponent } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import FormErrorAlert from 'components/Atoms/FormErrorAlert';

import styles from './FormInputRadio.module.scss';

interface FormInputRadioProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  required: boolean;
  variant?: string;
}

const TAG = 'FormInputRadio';

const mock = {
  deliveryModes: [
    {
      code: 'standard-gross',
      deliveryCost: { currencyIso: 'USD', formattedValue: '$8.99', priceType: 'BUY', value: 8.99 },
      description: '3-5 business days',
      name: 'Standard Delivery',
    },
    {
      code: 'premium-gross',
      deliveryCost: { currencyIso: 'USD', formattedValue: '$15.99', priceType: 'BUY', value: 15.99 },
      description: '1-2 business days',
      name: 'Premium Delivery',
    },
  ],
};
// TODO, REMOVE ONCE WE GET ACCESS TO THAT ENDPOINT
const FormInputRadio: FunctionComponent<FormInputRadioProps> = ({ register, errors, required, variant }) => {
  const { t } = useTranslation('checkout');
  return (
    <>
      {mock.deliveryModes.map((mockItem) => (
        <label key={mockItem.name} className={styles.label}>
          <input
            className={styles.input}
            aria-describedby={`${t('components.form.delivery-method')}-${t('components.form.field-error')}`}
            type="radio"
            value={mockItem.code}
            {...register(t('components.form.delivery-method'), {
              required: required ? t('components.form.required-alert') : required,
            })}
          />

          <p className={clsx(styles.description, styles[`description--${variant}`])}>
            <span>{mockItem.deliveryCost.formattedValue}</span>
            <span>
              {mockItem.name}&nbsp;{mockItem.description}
            </span>
          </p>
        </label>
      ))}
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
