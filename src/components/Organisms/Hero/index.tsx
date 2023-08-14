import React from 'react';

import Slider from 'components/Molecules/Slider';

interface HeroProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
  footerContent: Readonly<Hybris.FooterComponentProps>;
}

const Hero: React.FC<HeroProps> = ({ heroContent, footerContent }) => {
  return <Slider heroContent={heroContent} footerContent={footerContent} />;
};

export default Hero;
