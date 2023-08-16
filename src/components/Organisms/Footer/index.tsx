import Container from 'components/Atoms/Container';
import Copyright from 'components/Atoms/CopyRight';
import Logo from 'components/Atoms/Logo';
import PolicyLinksList from 'components/Molecules/PolicyLinksList';
import SocialLinks from 'components/Molecules/SocialLinks';

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
          {footerContent && <PolicyLinksList policyLinks={footerContent.policyLinks} />}
        </div>
        <div className={styles['footer__social']}>
          {footerContent && (
            <SocialLinks socialLinks={footerContent.socialLinks} socialText={footerContent.socialText} />
          )}
        </div>
        <div className={styles['footer__copyright']}>
          {footerContent && <Copyright>{footerContent.copyrightText}</Copyright>}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
