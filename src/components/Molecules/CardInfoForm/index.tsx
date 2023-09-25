import React, { FunctionComponent, useContext } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import Button from 'components/Atoms/Button';
import { cardExpirationMonth, cardExpirationYear, cardOptions } from 'components/Molecules/CardInfoForm/formData';
import FormInputSelect from 'components/Molecules/FormInputSelect';
import FormInputText from 'components/Molecules/FormInputText';
import { CARD_NUMBER_REGEX, CVV_REGEX } from 'config/consts';
import { CardInfo, CheckoutContext } from 'utils/Providers/CheckoutProvider/context';

import styles from './CardInfoForm.module.scss';

interface CardInfoFormProps {
  payment: CardInfo | null;
  formToggle: () => void;
}

const TAG = 'CardInfoForm';

const CardInfoForm: FunctionComponent<CardInfoFormProps> = ({ payment, formToggle }) => {
  const { t } = useTranslation('checkout');
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
    clearErrors,
    setError,
  } = useForm({
    defaultValues: payment
      ? {
          [t('components.payment.card-type')]: payment.cardType,
          [t('components.payment.security-number')]: payment.cvv,
          [t('components.payment.expiration-month')]: payment.cardExpMonth,
          [t('components.payment.expiration-year')]: payment.cardExpYear,
          [t('components.payment.card-number')]: payment.cardNumber,
          [t('components.payment.account-holder-name')]: payment.name,
        }
      : undefined,
  });
  const { setPayment } = useContext(CheckoutContext);

  const onValid: SubmitHandler<FieldValues> = (e) => {
    const data = {
      cardType: e[t('components.payment.card-type')],
      cvv: e[t('components.payment.security-number')],
      cardExpMonth: e[t('components.payment.expiration-month')],
      cardExpYear: e[t('components.payment.expiration-year')],
      cardNumber: e[t('components.payment.card-number')],
      name: e[t('components.payment.account-holder-name')],
    };
    setPayment(data);
    formToggle();
  };

  const handleDateFieldErrors = (currentDate: Date, formDate: Date, field: string): void => {
    if (currentDate < formDate) {
      clearErrors(field);
    } else if (formDate < currentDate) {
      setError(field, { message: t('components.payment.date-alert') });
    }
  };

  return (
    <form name="card-payment-form" onSubmit={handleSubmit(onValid)} className={styles.form}>
      <FormInputSelect
        register={register}
        name={t('components.payment.card-type')}
        errors={errors}
        optionsArray={cardOptions}
        required
        defaultOption={t('components.payment.card-type-placeholder')}
        autoComplete="cc-type"
      />
      <FormInputText
        name={t('components.payment.account-holder-name')}
        register={register}
        errors={errors}
        required
        autoComplete="cc-name"
      />
      <FormInputText
        inputMode="numeric"
        name={t('components.payment.card-number')}
        register={register}
        errors={errors}
        required
        formPattern={{
          value: CARD_NUMBER_REGEX,
          message: t('components.payment.card-number-alert'),
        }}
        autoComplete="cc-number"
      />
      <FormInputSelect
        name={t('components.payment.expiration-month')}
        register={register}
        errors={errors}
        optionsArray={cardExpirationMonth}
        required
        defaultOption={t('components.payment.expiration-month-placeholder')}
        validate={(value, formValues) => {
          const year = formValues[t('components.payment.expiration-year')];
          const formDate = new Date(year, Number(value));
          const currentDate = new Date();
          handleDateFieldErrors(currentDate, formDate, t('components.payment.expiration-year'));
          return currentDate < formDate || t('components.payment.date-alert');
        }}
        autoComplete="cc-exp-month"
      />
      <FormInputSelect
        name={t('components.payment.expiration-year')}
        register={register}
        errors={errors}
        optionsArray={cardExpirationYear}
        required
        defaultOption={t('components.payment.expiration-year-placeholder')}
        validate={(value, formValues) => {
          const month = formValues[t('components.payment.expiration-month')];
          const formDate = new Date(Number(value), month);
          const currentDate = new Date();
          handleDateFieldErrors(currentDate, formDate, t('components.payment.expiration-month'));
          return currentDate < formDate || t('components.payment.date-alert');
        }}
        autoComplete="cc-exp-year"
      />
      <FormInputText
        inputMode="numeric"
        name={t('components.payment.security-number')}
        register={register}
        errors={errors}
        required
        formPattern={{
          value: CVV_REGEX,
          message: t('components.payment.security-number-alert'),
        }}
        autoComplete="cc-csc"
      />
      <Button
        disabled={isSubmitting || (isSubmitted && !isValid)}
        variant="green"
        type="submit"
        className={styles.button}>
        {t('components.payment.submit-payment')}
      </Button>
    </form>
  );
};

CardInfoForm.displayName = TAG;

export default CardInfoForm;
