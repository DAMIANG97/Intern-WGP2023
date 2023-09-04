import React from 'react';

interface GradientIconProps {
  decimalPercentage: number;
}

const GradientStar: React.FC<GradientIconProps> = ({ decimalPercentage }) => (
  <svg viewBox="0 0 14 13" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 0L9.05725 4.16844L13.6574 4.83688L10.3287 8.08156L11.1145 12.6631L7 10.5L2.8855 12.6631L3.6713 8.08156L0.342604 4.83688L4.94275 4.16844L7 0Z"
      fill="url(#gradient)"
    />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="100%" y2="0">
        <stop stopColor="var(--color-star-filled)" offset={`${decimalPercentage}%`} />
        <stop stopColor="var(--color-star)" offset={`${100 - decimalPercentage}%`} />
      </linearGradient>
    </defs>
  </svg>
);

export default GradientStar;
