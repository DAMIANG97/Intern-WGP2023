import React, { FunctionComponent } from 'react';
import useTranslation from 'next-translate/useTranslation';

import FacebookIcon from 'assets/icons/facebook.svg';
import GoogleIcon from 'assets/icons/google.svg';
import TwitterIcon from 'assets/icons/twitter.svg';
import YoutubeIcon from 'assets/icons/youtube.svg';
import clsx from 'clsx';
import ExternalLinkWithIcon from 'components/ExternalLinkWithIcon';

import styles from './SocialLinks.module.scss';

const SOCIALS = [
  { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/' },
  { name: 'Twitter', icon: TwitterIcon, href: 'https://twitter.com/' },
  { name: 'Youtube', icon: YoutubeIcon, href: 'https://www.youtube.com/' },
  { name: 'Google', icon: GoogleIcon, href: 'https://www.google.com/' },
] as const;

interface SocialLinksProps {
  vertical?: boolean;
}

const SocialLinks: FunctionComponent<SocialLinksProps> = ({ vertical }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(styles['social-links'], vertical && styles['social-links--vertical'])}>
      <p className={styles[`social-links__text`]}>{t('components.social.followUs')}</p>
      <ul className={styles['social-links__list']}>
        {SOCIALS.map((item) => (
          <li className={styles['social-links__list-item']} key={item.name}>
            <ExternalLinkWithIcon href={item.href} aria-label={item.name}>
              <item.icon />
            </ExternalLinkWithIcon>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
