import Link from 'next/link';

import styles from './BreadcrumbItem.module.scss';

type BreadcrumbVariant = 'light' | 'dark';
export interface BreadcrumbItemProps {
  children: React.ReactNode;
  href: string;
  variant?: BreadcrumbVariant;
}
const BreadcrumbItem = ({ children, href, variant = 'light', ...props }: BreadcrumbItemProps) => {
  return (
    <li {...props} className={styles.breadcrumbs__linkItem}>
      <Link className={styles[variant]} href={href}>
        {children}
      </Link>
      <span className={styles.breadcrumbs__arrowRight}></span>
    </li>
  );
};

export default BreadcrumbItem;
