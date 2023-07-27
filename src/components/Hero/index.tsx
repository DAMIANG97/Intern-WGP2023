import React from 'react';

import Container from 'components/Container';
import TitleAndDescription from 'components/Hero/TitleAndDescription';
import SocialLinks from 'components/SocialLinks';
import tempArray from 'mocks/mocks';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero__container}>
      <Container className={styles.hero__banner}>
        <div className={styles.hero__socialBar}>
          <SocialLinks vertical />
        </div>
        <div className={styles.hero__textContainer}>
          {/* SLIDER HERE -> map over the list list of hero banners here */}
          <TitleAndDescription title={tempArray[0].headline} description={tempArray[0].content} />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
