import Arrow from 'assets/icons/arrowSlider.svg';
import { Breakpoint } from 'utils/Hooks/useBreakpoints';

import styles from './ProductSliderCustomControls.module.scss';

const defaultControlsConfig = {
  prevButtonClassName: styles['carousel-button--left'],
  prevButtonStyle: {
    color: undefined,
    background: 'none',
    border: 'none',
    padding: 0,
  },
  prevButtonText: <Arrow />,
  nextButtonClassName: styles['carousel-button'],
  nextButtonStyle: {
    color: undefined,
    background: 'none',
    border: 'none',
    padding: 0,
  },
  nextButtonText: <Arrow />,
  pagingDotsClassName: styles['slider__paging-dots'],
  pagingDotsStyle: { display: 'none' },
};

function slides(breakpoint: Breakpoint) {
  switch (breakpoint) {
    case 'laptop':
      return 4;
    case 'desktop':
      return 5;
    case 'wide':
      return 6;
  }
}

function setCarousel(breakpoint: Breakpoint) {
  const CAROUSEL_OPTIONS = {
    defaultControlsConfig,
    slidesToShow: slides(breakpoint),
  };
  return CAROUSEL_OPTIONS;
}

export default setCarousel;
