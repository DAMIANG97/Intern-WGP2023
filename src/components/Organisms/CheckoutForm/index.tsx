import React, { FunctionComponent, useContext, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import { useMutation } from '@tanstack/react-query';
import Button from 'components/Atoms/Button';
import AddressFormFields from 'components/Molecules/AddressFormFields';
import FormInputRadio from 'components/Molecules/FormInputRadio';
import addAddress from 'utils/Hybris/Checkout/addAddress';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';

import styles from './CheckoutForm.module.scss';

interface CheckoutFormProps {}

const TAG = 'CheckoutForm';

const CheckoutForm: FunctionComponent<CheckoutFormProps> = () => {
  const { openCheckout } = useContext(CheckoutContext);
  const { cartCode, cartGUID } = useContext(CartContext);
  const { t } = useTranslation('checkout');

  useEffect(() => {
    openCheckout();
  }, [openCheckout]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, status } = useMutation(addAddress);

  const onValid: SubmitHandler<FieldValues> = (e) => {
    const body = JSON.stringify(e);
    const data = { body: body, params: { userId: cartGUID, cartCode: cartCode } };
    mutate(data);
  };

  return (
    <form className={styles.form} name="Checkout Form" onSubmit={handleSubmit(onValid)}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>{t('components.form.shipping-address')}</legend>
        <AddressFormFields register={register} errors={errors} />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>{t('components.form.delivery-method')}</legend>
        <FormInputRadio register={register} errors={errors} required />
      </fieldset>
      <div className={styles['button-background']}>
        <Button disabled={status === 'loading'} className={styles.button} variant="green" type="submit">
          {t('components.form.next')}
        </Button>
        {status === 'error' && <span className={styles.alert}>{t('components.form.form-error')}</span>}
      </div>
    </form>
  );
};

CheckoutForm.displayName = TAG;

export default CheckoutForm;
