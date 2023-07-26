import React from 'react';

import Container from 'components/Container';

import styles from './Hero.module.scss';

const Hero = () => {
  // the structure of the banner, when social bar and text component are ready, they will be
  // added here
  return (
    <div className={styles.hero__container}>
      <Container className={styles.hero__banner}>
        <div className={styles.hero__socialBar}></div>
        <div className={styles.hero__textContainer}></div>
      </Container>
    </div>
  );
};

export default Hero;
