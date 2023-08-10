import { FunctionComponent } from 'react';
import Link from 'next/link';

import styles from './PolicyLinksList.module.scss';

interface PolicyLinksProps {
  policyLinks: Hybris.FooterLink[];
}

const PolicyLinksList: FunctionComponent<PolicyLinksProps> = ({ policyLinks }) => {
  return (
    <ul className={styles['policy-links-list']}>
      {policyLinks?.map((link: Hybris.FooterLink) => (
        <li key={link.key} className={styles['policy-links-list-item']}>
          <Link href={link.url} target="_blank" rel="noopener noreferrer">
            <span className={styles['link-text']}>{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PolicyLinksList;
