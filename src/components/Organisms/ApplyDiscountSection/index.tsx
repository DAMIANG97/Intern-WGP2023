import React, { ChangeEvent, FunctionComponent, useContext, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import { useMutation } from '@tanstack/react-query';
import ApplyDiscountButton from 'components/Atoms/ApplyDiscountButton';
import Input from 'components/Atoms/Input';
import AccordionItem from 'components/Molecules/AccordionItem';
import get from 'lodash/get';
import addDiscountCoupon from 'utils/Hybris/Cart/addDiscountCoupon';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './ApplyDiscountSection.module.scss';

const TAG = 'Apply Discount Section';

const ApplyDiscountSection: FunctionComponent = () => {
  const { t } = useTranslation('cart');
  const [inputValue, setInputValue] = useState('');
  const { user, token } = useContext(UserContext);
  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const { handleSubmit } = useForm();

  const { mutate, error, isError } = useMutation(addDiscountCoupon);

  const onValid: SubmitHandler<FieldValues> = (e) => {
    const body = JSON.stringify(e);
    const data = { body: body, params: { userId: user, couponCode: inputValue, token: token } };
    mutate(data);
  };

  return (
    <section className={styles.applyDiscount__accordionItemContent}>
      <AccordionItem
        name={t('components.cart.accordionItemName')}
        variant="discount"
        modifierClassName={styles.applyDiscount__name}>
        <form name={t('components.cart.formName')} onSubmit={handleSubmit(onValid)}>
          <div className={styles.applyDiscount__accordionItemContainer}>
            <Input
              className={styles.applyDiscount__input}
              value={inputValue}
              onChange={inputChangeHandler}
              shouldBeVisible={true}
            />
            <ApplyDiscountButton />
          </div>

          {isError && <p className={styles.applyDiscount__error}>{get(error, 'errors[0].message')}</p>}
        </form>
      </AccordionItem>
    </section>
  );
};

ApplyDiscountSection.displayName = TAG;

export default ApplyDiscountSection;
