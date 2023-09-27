import React, { FunctionComponent, useCallback, useContext, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import { useMutation } from '@tanstack/react-query';
import FormInputRadio from 'components/Molecules/FormInputRadio';
import postDeliveryMode from 'utils/Hybris/Checkout/postDeliveryMode';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './DeliveryModeForm.module.scss';

interface DeliveryModeFormProps {
  setStepStatus?: React.Dispatch<
    React.SetStateAction<{
      address: boolean;
      delivery: boolean;
    }>
  >;
  variant?: 'checkout';
}

const TAG = 'DeliveryModeForm';

const DeliveryModeForm: FunctionComponent<DeliveryModeFormProps> = ({ setStepStatus, variant }) => {
  const { t } = useTranslation();
  const { cartCode, cart, cartRefresh } = useContext(CartContext);
  const { user, token } = useContext(UserContext);
  const { deliveryModes, openCheckout } = useContext(CheckoutContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      [t('components.form.delivery-method')]: deliveryModes ? cart?.deliveryMode?.code : null,
    },
  });

  const { mutate } = useMutation(postDeliveryMode, {
    onSuccess: async () => {
      cartRefresh();
      setStepStatus ? setStepStatus((prevState) => ({ ...prevState, delivery: true })) : null;
    },
  });

  const onValid: SubmitHandler<FieldValues> = useCallback(
    (e) => {
      const data = {
        userId: user,
        cartCode: cartCode,
        token: token,
        selectedValue: e[t('components.form.delivery-method')],
      };
      mutate(data);
    },
    [cartCode, mutate, token, user, t],
  );
  useEffect(() => {
    deliveryModes ? setValue(t('components.form.delivery-method'), cart?.deliveryMode?.code) : '';
    setStepStatus ? setStepStatus((prevState) => ({ ...prevState, delivery: true })) : null;
  }, [cart?.deliveryMode?.code, setValue, t, deliveryModes, setStepStatus]);

  useEffect(() => {
    openCheckout();
    const subscription = watch(() => handleSubmit(onValid)(), {
      [t('components.form.delivery-method')]: cart?.deliveryMode?.code,
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch, onValid, openCheckout, cart, t]);

  return deliveryModes && deliveryModes.deliveryModes.length !== 0 ? (
    <div className={styles[`form--${variant}`]}>
      <p className={styles.title}>{t('components.form.delivery-method')}</p>
      <form onSubmit={handleSubmit(onValid)} name={TAG} className={styles.form}>
        {deliveryModes.deliveryModes.map((mode) => (
          <FormInputRadio key={mode.name} register={register} errors={errors} required value={mode.code}>
            <p className={styles.description}>
              <span>{mode.deliveryCost.formattedValue}</span>
              <span>
                {mode.name}&nbsp;{mode.description}
              </span>
            </p>
          </FormInputRadio>
        ))}
      </form>
    </div>
  ) : null;
};

DeliveryModeForm.displayName = TAG;

export default DeliveryModeForm;
