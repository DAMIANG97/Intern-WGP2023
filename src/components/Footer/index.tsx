import Container from 'components/Container';
import Copyright from 'components/Footer/CopyRight';
import PolicyLinksList from 'components/Footer/PolicyLinksList';
import SocialLinks from 'components/Footer/SocialLinks';
import Logo from 'components/Header/Logo';

import styles from './Footer.module.scss';

interface FooterProps {
  footerContent: Readonly<Hybris.FooterComponentProps>;
  localeOptions: Hybris.LocaleOptions;
}

const Footer: React.FC<FooterProps> = ({ footerContent }) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.footer__container}>
        <Logo className={styles['footer__logo']} />
        <div className={styles['footer__policy']}>
          <PolicyLinksList policyLinks={footerContent.policyLinks} />
        </div>
        <div className={styles['footer__social']}>
          <SocialLinks socialLinks={footerContent.socialLinks} socialText={footerContent.socialText} />
        </div>
        <div className={styles['footer__copyright']}>
          <Copyright>{footerContent.copyrightText}</Copyright>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
