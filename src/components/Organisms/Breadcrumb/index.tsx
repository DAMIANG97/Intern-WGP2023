import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import BreadcrumbItem from 'components/Molecules/BreadcrumbItem';

import styles from './Breadcrumb.module.scss';

type BreadcrumbVariant = 'light' | 'dark';
export interface BreadcrumbProps {
  variant?: BreadcrumbVariant;
  hideOnMobile?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ variant, hideOnMobile }) => {
  const { t } = useTranslation();
  const router = useRouter();

  const breadcrumbs = useMemo(() => {
    const pathWithoutQuery = router.asPath.split('?')[0].split('#')[0];

    let pathArray = pathWithoutQuery.split('/');
    pathArray.shift();
    pathArray = pathArray.filter((path) => path !== '');

    const breadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/');
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
      };
    });

    return breadcrumbs;
  }, [router.asPath]);

  return (
    <nav aria-label={t('components.breadcrumb.label')}>
      <ol
        className={clsx(
          styles.breadcrumbs__container,
          hideOnMobile && styles['breadcrumbs__container--hide-on-mobile'],
        )}>
        <BreadcrumbItem variant={variant} href="/">
          {t('components.breadcrumb.home')}
        </BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => {
            return (
              <BreadcrumbItem variant={variant} key={breadcrumb.href} href={breadcrumb.href} aria-current>
                {breadcrumb.label}
              </BreadcrumbItem>
            );
          })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
