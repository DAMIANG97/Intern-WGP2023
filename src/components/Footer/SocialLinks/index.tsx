import React, { FunctionComponent } from 'react';

import FacebookIcon from 'assets/icons/facebook.svg';
import GoogleIcon from 'assets/icons/google.svg';
import HeartIcon from 'assets/icons/heart.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import clsx from 'clsx';
import ExternalLinkWithIcon from 'components/Footer/ExternalLinkWithIcon';

import styles from './SocialLinks.module.scss';

const iconsSwitch = (linkName: string) => {
  switch (true) {
    case linkName.includes('facebook'):
      return <FacebookIcon />;

    case linkName.includes('twitter'):
      return <TwitterIcon />;

    case linkName.includes('agile'):
      return <YoutubeIcon />;

    case linkName.includes('linked'):
      return <GoogleIcon />;

    default:
      return <HeartIcon />;
  }
};

interface SocialLinksProps {
  vertical?: boolean;
  socialLinks: Hybris.FooterLink[];
  socialText: string | undefined;
}

const SocialLinks: FunctionComponent<SocialLinksProps> = ({ vertical, socialLinks, socialText }) => {
  return (
    <div className={clsx(styles['social-links'], vertical && styles['social-links--vertical'])}>
      <p className={styles[`social-links__text`]}>{socialText ? socialText : ''}</p>
      <ul className={styles['social-links__list']}>
        {socialLinks?.map((item: Hybris.FooterLink) => (
          <li className={styles['social-links__list-item']} key={item.name}>
            <ExternalLinkWithIcon href={item.url} aria-label={item.name}>
              {iconsSwitch(item.name.toLowerCase())}
            </ExternalLinkWithIcon>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
