import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import Button from 'components/Atoms/Button';
import AddressFormFields from 'components/Molecules/AddressFormFields';
import DeliveryModeForm from 'components/Molecules/DeliveryModeForm';
import { StepIndexes } from 'modules/Checkout';
import addAddress from 'utils/Hybris/Checkout/addAddress';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './CheckoutForm.module.scss';

interface CheckoutFormProps {
  handleStepChange: (step: StepIndexes) => void;
}

const TAG = 'CheckoutForm';

const CheckoutForm: FunctionComponent<CheckoutFormProps> = ({ handleStepChange }) => {
  const { openCheckout, countries, titles } = useContext(CheckoutContext);
  const { cartCode, cart, cartRefresh } = useContext(CartContext);
  const { user, token } = useContext(UserContext);
  const { t } = useTranslation('checkout');
  const [stepStatus, setStepStatus] = useState({ address: false, delivery: false });
  const queryClient = useQueryClient();

  useEffect(() => {
    openCheckout();
  }, [openCheckout]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm();
  const { mutate, status } = useMutation(addAddress, {
    onSuccess: async () => {
      cartRefresh();
      queryClient.invalidateQueries({ queryKey: ['getDeliveryModes'], exact: false });
    },
  });

  useEffect(() => {
    if (cart && cart.deliveryAddress) {
      setValue(t('components.form.fields.country'), cart?.deliveryAddress.country.name);
      setValue(t('components.form.fields.title'), cart?.deliveryAddress.title);
      setValue(t('components.form.fields.first-name'), cart?.deliveryAddress.firstName);
      setValue(t('components.form.fields.last-name'), cart?.deliveryAddress.lastName);
      setValue(t('components.form.fields.address1'), cart?.deliveryAddress.line1);
      setValue(t('components.form.fields.address2'), cart?.deliveryAddress.postalCode);
      setValue(t('components.form.fields.city'), cart?.deliveryAddress.town);
      setStepStatus((prevState) => ({ ...prevState, address: true }));
    }
  }, [cart, setValue, t]);

  const onValid: SubmitHandler<FieldValues> = (e) => {
    const isocode = countries?.countries.find((item) => item.name === e[t('components.form.fields.country')])?.isocode;
    const body = JSON.stringify({
      title: e.Title,
      titleCode: titles?.titles.find((title) => title.name === e[t('components.form.fields.title')])?.code,
      firstName: e[t('components.form.fields.first-name')],
      lastName: e[t('components.form.fields.last-name')],
      line1: e[t('components.form.fields.address1')],
      postalCode: e[t('components.form.fields.address2')],
      town: e[t('components.form.fields.city')],
      country: { isocode: isocode },
    });
    const data = { body: body, params: { userId: user, cartCode: cartCode, token: token } };
    mutate(data);
    setStepStatus((prevState) => ({ ...prevState, address: true }));
  };
  const nextButtonClickHandler = () => {
    handleStepChange(StepIndexes.PAYMENT);
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} name="Checkout Form" onSubmit={handleSubmit(onValid)}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.title}>{t('components.form.shipping-address')}</legend>
          <AddressFormFields register={register} errors={errors} />
        </fieldset>
        <div className={styles['button-background']}>
          <Button
            disabled={isSubmitting || (isSubmitted && !isValid)}
            className={styles.button}
            variant="green"
            type="submit">
            {t('components.form.submitAddress')}
          </Button>
          {status === 'error' && <span className={styles.alert}>{t('components.form.form-error')}</span>}
        </div>
      </form>
      <DeliveryModeForm setStepStatus={setStepStatus} variant="checkout" />
      <div className={styles['button-background']}>
        <Button
          disabled={stepStatus.address === false || stepStatus.delivery === false}
          className={styles.button}
          variant="green"
          type="button"
          onClick={nextButtonClickHandler}>
          {t('components.form.next')}
        </Button>
      </div>
    </div>
  );
};

CheckoutForm.displayName = TAG;

export default CheckoutForm;
