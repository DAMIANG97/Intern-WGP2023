import Container from 'components/Container';
import Copyright from 'components/CopyRight';
import Logo from 'components/Header/Logo';
import PolicyLinksList from 'components/PolicyLinksList';
import SocialLinks from 'components/SocialLinks';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerbackground}>
      <Container className={styles.footer}>
        <Logo className={styles['footer__logo']} />
        <span className={styles['footer__policy']}>
          <PolicyLinksList />
        </span>
        <span className={styles['footer__social']}>
          <SocialLinks />
        </span>
        <span className={styles['footer__copyright']}>
          <Copyright>Copyring © Viachas Kul. All right reserved.</Copyright>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
