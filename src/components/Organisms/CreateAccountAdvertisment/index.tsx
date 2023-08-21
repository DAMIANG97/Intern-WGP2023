import React from 'react';

import Container from 'components/Atoms/Container';
import CreateAccountBanner from 'components/Molecules/CreateAccountBanner';
import EmailBox from 'components/Molecules/EmailBox';

import styles from './CreateAccountAdvertisment.module.scss';

const CreateAccount = () => {
  return (
    <Container className={styles.createAccount__container}>
      <CreateAccountBanner />
      <EmailBox />
    </Container>
  );
};

export default CreateAccount;
