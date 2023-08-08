import type { Meta, StoryObj } from '@storybook/react';
import Slider from 'components/Slider';
import Carousel from 'nuka-carousel';

import styles from './Slider.module.scss';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;
const CAROUSEL_OPTIONS = {
  defaultControlsConfig: {
    pagingDotsClassName: styles['slider__paging-dots'],
    pagingDotsStyle: { fill: undefined, opacity: 1 },
  },

  wrapAround: true,
  autoplayInterval: 2000,
  speed: 1000,
};
const SLIDES = [
  <div key="yellow" style={{ backgroundColor: 'yellow', width: '100%', height: '18rem' }} />,
  <div key="blue" style={{ backgroundColor: 'blue', width: '100%', height: '18rem' }} />,
  <div key="purple" style={{ backgroundColor: 'purple', width: '100%', height: '18rem' }} />,
];
export const SlideDesktop: Story = {
  render: () => {
    return (
      <Carousel {...CAROUSEL_OPTIONS} autoplay>
        {SLIDES}
      </Carousel>
    );
  },

  parameters: {
    backgrounds: { default: 'white' },
  },
};

export const SlideMobile: Story = {
  render: () => {
    return <Carousel {...CAROUSEL_OPTIONS}>{SLIDES}</Carousel>;
  },

  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    backgrounds: { default: 'white' },
  },
};
