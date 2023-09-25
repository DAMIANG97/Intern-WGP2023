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
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './CheckoutForm.module.scss';

interface CheckoutFormProps {}

const TAG = 'CheckoutForm';

const CheckoutForm: FunctionComponent<CheckoutFormProps> = () => {
  const { openCheckout, countries, titles, deliveryModes } = useContext(CheckoutContext);
  const { cartCode } = useContext(CartContext);
  const { user, token } = useContext(UserContext);
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
    console.error(e[t('components.form.fields.country')]);
    const isocode = countries?.countries.find((item) => item.name === e[t('components.form.fields.country')])?.isocode;
    const body = JSON.stringify({
      title: e.Title,
      titleCode: titles?.titles.find((title) => title.name === e[t('components.form.fields.title')]),
      firstName: e[t('components.form.fields.first-name')],
      lastName: e[t('components.form.fields.last-name')],
      line1: e[t('components.form.fields.address1')],
      postalCode: e[t('components.form.fields.address2')],
      town: e[t('components.form.fields.city')],
      country: { isocode: isocode },
    });
    const data = { body: body, params: { userId: user, cartCode: cartCode, token: token } };
    mutate(data);
  };

  return (
    <form className={styles.form} name="Checkout Form" onSubmit={handleSubmit(onValid)}>
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>{t('components.form.shipping-address')}</legend>
        <AddressFormFields register={register} errors={errors} />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.title}>{t('common:components.form.delivery-method')}</legend>
        {deliveryModes?.deliveryModes.map((mode) => (
          <FormInputRadio key={mode.name} register={register} errors={errors} required value={mode.code}>
            <p className={styles['shipping-description']}>
              <span>{mode.deliveryCost.formattedValue}</span>
              <span>
                {mode.name}&nbsp;{mode.description}
              </span>
            </p>
          </FormInputRadio>
        ))}
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
