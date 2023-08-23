import React from 'react';

import Slider from 'components/Molecules/Slider';

interface HeroHomePageProps {
  heroContent: ReadonlyArray<Hybris.HeroComponentProps>;
  footerContent: Readonly<Hybris.FooterComponentProps>;
}

const HeroHomePage: React.FC<HeroHomePageProps> = ({ heroContent, footerContent }) => {
  return <Slider heroContent={heroContent} footerContent={footerContent} />;
};

export default HeroHomePage;
