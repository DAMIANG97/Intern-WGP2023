import React from 'react';

import LogoIcon from 'assets/icons/logo.svg';

interface FallbackImageProps {
  imgAltText: string;
  className: string;
}

const FallbackImage: React.FC<FallbackImageProps> = ({ imgAltText, className }) => {
  return <LogoIcon aria-label={imgAltText} className={className} />;
};

export default FallbackImage;
