import React from 'react';

import Slider from 'components/Slider';

interface HeroProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
}

const Hero: React.FC<HeroProps> = ({ heroContent }) => {
  return <Slider heroContent={heroContent} />;
};

export default Hero;
