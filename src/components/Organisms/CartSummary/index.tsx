import React, { FunctionComponent, useCallback, useContext, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import { useMutation } from '@tanstack/react-query';
import ProceedToCheckoutButton from 'components/Atoms/ProceedToCheckoutButton';
import AccordionItem from 'components/Molecules/AccordionItem';
import FormInputRadio from 'components/Molecules/FormInputRadio';
import OrderTotalSummary from 'components/Molecules/OrderTotalSummary';
import postDeliveryMode from 'utils/Hybris/Checkout/postDeliveryMode';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './CartSummary.module.scss';

const TAG = 'Cart Summary Section';

const CartSummary: FunctionComponent = () => {
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

  const { mutate } = useMutation(postDeliveryMode, { onSuccess: async () => cartRefresh() });

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
  }, [cart?.deliveryMode?.code, setValue, t, deliveryModes]);

  useEffect(() => {
    openCheckout();
    const subscription = watch(() => handleSubmit(onValid)(), {
      [t('components.form.delivery-method')]: cart?.deliveryMode?.code,
    });
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch, onValid, openCheckout, cart, t]);

  return (
    <section className={styles.summary__container}>
      <h3 className={styles.summary__title}>{t('cart:components.cart.summaryTitle')}</h3>
      {deliveryModes ? (
        <AccordionItem
          name={t('cart:components.cart.summaryAccordionTitle')}
          variant="discount"
          modifierClassName={styles.summary__name}>
          <form onSubmit={handleSubmit(onValid)} name={TAG} className={styles.summary__form}>
            {deliveryModes.deliveryModes.map((mode) => (
              <FormInputRadio key={mode.name} register={register} errors={errors} required value={mode.code}>
                <p className={styles['summary__shipping-description']}>
                  <span>{mode.deliveryCost.formattedValue}</span>
                  <span>
                    {mode.name}&nbsp;{mode.description}
                  </span>
                </p>
              </FormInputRadio>
            ))}
          </form>
        </AccordionItem>
      ) : null}

      <OrderTotalSummary
        subTotal={cart?.subTotal.formattedValue ?? ''}
        total={cart?.totalPriceWithTax.formattedValue ?? ''}
        tax={cart?.totalTax.formattedValue ?? '0'}
        discounts={cart?.totalDiscounts.formattedValue ?? '0'}
        delivery={cart?.deliveryCost?.formattedValue ?? '0'}
      />
      <ProceedToCheckoutButton />
    </section>
  );
};

CartSummary.displayName = TAG;

export default CartSummary;
