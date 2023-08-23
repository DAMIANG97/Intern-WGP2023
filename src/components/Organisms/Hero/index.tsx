import React from 'react';
import Image from 'next/image';

import Container from 'components/Atoms/Container';
import H1 from 'components/Atoms/H1';
import Breadcrumb from 'components/Organisms/Breadcrumb';

import styles from './Hero.module.scss';

interface HeroProps {
  heroContent: Hybris.HeroComponentSearchProps;
  categoryId: string | string[];
}

const Hero: React.FC<HeroProps> = ({ heroContent, categoryId }) => {
  const CATEGORY_ID_UPPER_CASE = categoryId.toString().replace(/^[a-z]/, (char) => char.toUpperCase());
  return (
    <div className={styles.hero}>
      <Container className={styles.hero__container}>
        <div className={styles.hero__breadcrumb}>
          <Breadcrumb />
        </div>
        <H1 className={styles.hero__h1}>{CATEGORY_ID_UPPER_CASE}</H1>
      </Container>
      <Image
        className={styles.hero__background}
        src={heroContent.media.url}
        alt={heroContent.media.altText}
        width={1920}
        height={176}
        priority={true}
      />
    </div>
  );
};

export default Hero;
