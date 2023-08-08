import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Container from 'components/Container';
import TitleAndDescription from 'components/Hero/TitleAndDescription';
import SocialLinks from 'components/SocialLinks';
import debounce from 'lodash.debounce';
import Carousel from 'nuka-carousel';

import styles from './Slider.module.scss';

export interface SliderProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
}
const CAROUSEL_OPTIONS = {
  defaultControlsConfig: {
    prevButtonClassName: styles['slider__next-button--left'],
    prevButtonStyle: { color: undefined, background: undefined, border: undefined, padding: undefined },
    prevButtonText: ' ',

    nextButtonClassName: styles['slider__next-button'],
    nextButtonStyle: { color: undefined, background: undefined, border: undefined, padding: undefined },
    nextButtonText: ' ',
    pagingDotsClassName: styles['slider__paging-dots'],
    pagingDotsStyle: { fill: undefined, opacity: 1 },
    pagingDotsContainerClassName: styles['slider__paging-container'],
  },

  wrapAround: true,
  autoplayInterval: 5000,
  speed: 1000,
};
const Slider: React.FC<SliderProps> = ({ heroContent }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = debounce(() => {
      const isDesktop = window.matchMedia('(min-width: 740px)').matches;
      setIsDesktop(isDesktop);
    }, 500);
    const resizeObserver = new ResizeObserver(handleResize);

    resizeObserver.observe(window.document.body);

    return () => {
      resizeObserver.disconnect();
      handleResize.cancel();
    };
  }, []);

  return (
    <Carousel {...CAROUSEL_OPTIONS} autoplay={isDesktop}>
      {heroContent.map((content, index) => (
        <div className={styles.slider__container} key={index}>
          <Container className={styles.slider__banner}>
            <div className={styles.slider__socialBar}>
              <SocialLinks vertical />
            </div>
            <div className={styles.slider__textContainer}>
              <TitleAndDescription title={content.headline} description={content.content} />
            </div>
          </Container>
          <Image
            className={styles.slider__background}
            src={`https://wgp2023.mooo.com:9002${content.media.url}`}
            alt={content.media.altText}
            width={2000}
            height={2000}
            priority={true}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
