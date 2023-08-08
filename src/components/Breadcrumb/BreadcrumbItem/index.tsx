import Link from 'next/link';

import styles from './BreadcrumbItem.module.scss';

export interface BreadcrumbItemProps {
  children: React.ReactNode;
  href: string;
}
const BreadcrumbItem = ({ children, href, ...props }: BreadcrumbItemProps) => {
  return (
    <li {...props} className={styles.breadcrumbs__linkItem}>
      <Link href={href}>{children}</Link>
      <span className={styles.breadcrumbs__arrowRight}></span>
    </li>
  );
};

export default BreadcrumbItem;
