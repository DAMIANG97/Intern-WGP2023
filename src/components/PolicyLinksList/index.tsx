import Link from 'next/link';

import styles from './PolicyLinksList.module.scss';

// TODO: WGP2023-22 Get list of links from the backend
const links = [
  { title: 'Policy', url: '/' },
  { title: 'Terms & Conditions', url: '/' },
  { title: 'Help', url: '/' },
];

const PolicyLinksList = () => {
  return (
    <ul className={styles['policy-links-list']}>
      {links.map((link) => (
        <li key={link.title}>
          <Link href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PolicyLinksList;
