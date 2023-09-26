import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import HeadingH3 from 'components/Atoms/HeadingH3';
import SmallLoader from 'components/Atoms/SmallLoader';

import styles from './ShippingSummary.module.scss';

interface ShippingSummaryProps {
  address: Hybris.Address | undefined;
  deliveryMode: Hybris.DeliveryMode | undefined;
}

const TAG = 'ShippingSummary';

const ShippingSummary: FunctionComponent<ShippingSummaryProps> = ({ address, deliveryMode }) => {
  const { t } = useTranslation('checkout');
  return address && deliveryMode ? (
    <address className={styles.container}>
      <HeadingH3 className={styles.heading}>{t('components.shippingSummary.shipTo')}</HeadingH3>
      <span className={styles.content}>
        {address.firstName}&nbsp;{address.lastName}
      </span>
      <span className={styles.content}>{address.formattedAddress}</span>
      <span className={styles.content}>{address.country.name}</span>
      <HeadingH3 className={styles.heading}>{t('components.shippingSummary.shippingMethod')}</HeadingH3>
      <span className={styles.content}>{deliveryMode.name}</span>
      <span className={styles.content}>{deliveryMode.description}</span>
    </address>
  ) : (
    <section className={styles.container}>
      <SmallLoader />
    </section>
  );
};

ShippingSummary.displayName = TAG;

export default ShippingSummary;
