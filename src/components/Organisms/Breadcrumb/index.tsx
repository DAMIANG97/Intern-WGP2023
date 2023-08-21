import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';

import BreadcrumbItem from 'components/Molecules/BreadcrumbItem';

import styles from './Breadcrumb.module.scss';

export interface BreadcrumbProps {
  children: React.ReactNode;
}
const Breadcrumb = () => {
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
      <ol className={styles.breadcrumbs__container}>
        <BreadcrumbItem href="/">{t('components.breadcrumb.home')}</BreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb) => {
            return (
              <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href} aria-current>
                {breadcrumb.label}
              </BreadcrumbItem>
            );
          })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
