import React, { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import ApplyDiscountButton from 'components/Atoms/ApplyDiscountButton';
import Input from 'components/Atoms/Input';
import AccordionItem from 'components/Molecules/AccordionItem';

import styles from './ApplyDiscountSection.module.scss';

const TAG = 'Apply Discount Section';

const ApplyDiscountSection: FunctionComponent = () => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
  };
  return (
    <section className={styles.applyDiscount__accordionItemContent}>
      <AccordionItem
        name={t('components.cart.accordionItemName')}
        modiferclassName={styles.applyDiscount__accordionItem}
        className={styles.applyDiscount__accordionItem}>
        <form name={t('components.cart.formName')} onSubmit={submitHandler}>
          <div className={styles.applyDiscount__accordionItemContainer}>
            <Input className={styles.applyDiscount__input} value={inputValue} onChange={inputChangeHandler} />
            <ApplyDiscountButton />
          </div>
        </form>
      </AccordionItem>
    </section>
  );
};

ApplyDiscountSection.displayName = TAG;

export default ApplyDiscountSection;
