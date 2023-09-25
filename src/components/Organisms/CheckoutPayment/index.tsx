import React, { Fragment, FunctionComponent, useContext, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import Button from 'components/Atoms/Button';
import H1 from 'components/Atoms/H1';
import CardInfoForm from 'components/Molecules/CardInfoForm';
import { CheckoutContext } from 'utils/Providers/CheckoutProvider/context';

import styles from './CheckoutPayment.module.scss';

const TAG = 'CheckoutPayment';

const CheckoutPayment: FunctionComponent = () => {
  const { t } = useTranslation('checkout');
  const { payment } = useContext(CheckoutContext);
  const [formVisible, setFormVisible] = useState(false);
  const formToggle = () => setFormVisible((is) => !is);
  const cardInfo = [
    { label: t('components.payment.card-type'), value: payment?.cardType },
    { label: t('components.payment.account-holder-name'), value: payment?.name },
    { label: t('components.payment.card-number'), value: payment?.cardNumber },
    { label: t('components.payment.expiration'), value: `${payment?.cardExpMonth}/${payment?.cardExpYear}` },
    { label: t('components.payment.security-number'), value: payment?.cvv },
  ];

  return (
    <section className={styles.payment}>
      <H1 className={styles.payment__title}>{t('components.payment.payment-method')}</H1>
      {formVisible ? (
        <>
          <dl className={styles.payment__content}>
            {cardInfo.map((item) => (
              <Fragment key={item.label}>
                <dt className={styles.payment__info}>{item.label}</dt>
                <dd>{item.value}</dd>
              </Fragment>
            ))}
          </dl>
          <Button onClick={formToggle} type="button" className={styles['payment__edit-button']}>
            {t('components.payment.edit')}
          </Button>
        </>
      ) : (
        <CardInfoForm payment={payment} formToggle={formToggle} />
      )}
    </section>
  );
};

CheckoutPayment.displayName = TAG;

export default CheckoutPayment;
