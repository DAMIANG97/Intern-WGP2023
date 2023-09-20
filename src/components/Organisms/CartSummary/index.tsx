import React, { ChangeEvent, FunctionComponent, useContext, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import Input from 'components/Atoms/Input';
import LinkComponent from 'components/Atoms/LinkComponent';
import ProceedToCheckoutButton from 'components/Atoms/ProceedToCheckoutButton';
import AccordionItem from 'components/Molecules/AccordionItem';
import FormInputRadio from 'components/Molecules/FormInputRadio';
import OrderTotalSummary from 'components/Molecules/OrderTotalSummary';
import Select from 'components/Molecules/Select';
import addAddress from 'utils/Hybris/Checkout/addAddress';
import { CartContext } from 'utils/Providers/CartProvider/context';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './CartSummary.module.scss';

const TAG = 'Cart Summary Section';
const mockTotalPrice = '$ 5456.66';

const CartSummary: FunctionComponent = () => {
  const { t } = useTranslation('cart');
  const [inputValue, setInputValue] = useState('');

  const [selectedCountryOption, setSelectedCountryOption] = useState<string | null>('Poland');
  const { cartCode } = useContext(CartContext);
  const { countries, openCheckout } = useContext(CheckoutContext);
  const { user, token } = useContext(UserContext);
  const countriesList = countries?.countries.map((country) => {
    return country.name;
  });
  // TODO: to remove when it will be in the form
  useEffect(() => {
    openCheckout();
  }, [openCheckout]);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const countrySelectHandler = (country: string) => {
    setSelectedCountryOption(country);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation(addAddress);

  const onValid: SubmitHandler<FieldValues> = (e) => {
    const body = JSON.stringify(e);
    const data = { body: body, params: { userId: user, cartCode: cartCode, token: token } };
    mutate(data);
  };

  return (
    <section className={styles.summary__container}>
      <h3 className={styles.summary__title}>{t('components.cart.summaryTitle')}</h3>
      <AccordionItem
        name={t('components.cart.summaryAccordionTitle')}
        variant="discount"
        modifierClassName={styles.summary__name}>
        <form onSubmit={handleSubmit(onValid)} name={TAG}>
          <div className={styles.summary__inputsContainer}>
            {countriesList && (
              <Select
                options={countriesList}
                selectedOption={selectedCountryOption}
                submitHandler={countrySelectHandler}
                label={t('components.cart.countryLabel')}
                modifierClass={styles.summary__selectButton}
                listModifierClass={styles.summary__countriesList}
                name="country-select"
              />
            )}
            <Input
              className={styles.summary__input}
              text={t('components.cart.zipCodeLabel')}
              value={inputValue}
              onChange={inputChangeHandler}
              shouldBeVisible={true}
            />
            <FormInputRadio register={register} errors={errors} required variant="summary" />
          </div>
          <Button type="submit"> Submit</Button>
        </form>
      </AccordionItem>
      <OrderTotalSummary subTotal={mockTotalPrice} total={mockTotalPrice} />
      <ProceedToCheckoutButton />

      <LinkComponent href="#" className={clsx(styles.summary__link)}>
        {t('components.cart.proceedMultipleAddresses')}
      </LinkComponent>
    </section>
  );
};

CartSummary.displayName = TAG;

export default CartSummary;
