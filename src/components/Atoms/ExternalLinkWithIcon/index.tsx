import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import styles from './ExternalLinkWithIcon.module.scss';

interface ExternalLinkWithIconProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const ExternalLinkWithIcon: FunctionComponent<ExternalLinkWithIconProps> = ({ children, className, ...props }) => {
  return (
    <a className={clsx(styles.link, className)} target="_blank" {...props} rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLinkWithIcon;
