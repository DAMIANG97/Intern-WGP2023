import React from 'react';
import Image from 'next/image';

import Container from 'components/Atoms/Container';
import SocialLinks from 'components/Molecules/SocialLinks';
import TitleAndDescription from 'components/Molecules/TitleAndDescription';
import Carousel from 'nuka-carousel';
import useIsDesktop from 'utils/Hooks/useIsDesktop';
import { BASE_URL } from 'utils/Hybris/endpoints';
import { RoutePaths } from 'utils/routes';

import styles from './Slider.module.scss';

export interface SliderProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
  footerContent: Readonly<Hybris.FooterComponentProps>;
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
const PRODUCT_NUMBER_REGEX = /\/p\/(\d+)/;
const Slider: React.FC<SliderProps> = ({ heroContent, footerContent }) => {
  const isDesktop = useIsDesktop();
  return (
    <Carousel {...CAROUSEL_OPTIONS} autoplay={isDesktop}>
      {heroContent.map((content, index) => {
        const URL_LINK = content.urlLink;
        const MATCH = URL_LINK.match(PRODUCT_NUMBER_REGEX);
        const PRODUCT_NUMBER = MATCH ? MATCH[1] : '';

        return (
          <div className={styles.slider__container} key={index}>
            <Container className={styles.slider__banner}>
              <div className={styles.slider__socialBar}>
                <SocialLinks vertical socialLinks={footerContent.socialLinks} socialText={footerContent.socialText} />
              </div>
              <div className={styles.slider__textContainer}>
                <TitleAndDescription
                  link={`${RoutePaths.product}/${PRODUCT_NUMBER}`}
                  title={content.headline}
                  description={content.content}
                />
              </div>
            </Container>
            <Image
              className={styles.slider__background}
              src={`${BASE_URL}${content.media.url}`}
              alt={content.media.altText}
              width={1920}
              height={694}
              priority={true}
            />
          </div>
        );
      })}
    </Carousel>
  );
};

export default Slider;
