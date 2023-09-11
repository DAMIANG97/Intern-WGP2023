import React, { FunctionComponent, useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import Link from 'next/link';

import ArrowDown from 'assets/icons/arrowDown.svg';
import clsx from 'clsx';
import Button from 'components/Atoms/Button';

import styles from './AccordionItem.module.scss';

interface AccordionItemProps {
  children: React.ReactElement;
  name: string;
  href?: string;
  parentOpen?: boolean;
  filter?: boolean;
  modiferclassName?: string;
  className?: string;
  linkStatus?: boolean;
  linkHandler?: (is: boolean) => void;
}

const TAG = 'AccordionItem';

const AccordionItem: FunctionComponent<AccordionItemProps> = ({
  children,
  name,
  href,
  parentOpen,
  filter,
  modiferclassName,
  className,
  linkStatus,
  linkHandler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickHandler = () => {
    setIsOpen((is) => !is);
    if (linkHandler) {
      linkHandler(!linkStatus);
    }
  };
  useEffect(() => {
    if (parentOpen === false) {
      setIsOpen(false);
    }
    if (linkStatus) {
      setIsOpen(true);
    }
  }, [setIsOpen, parentOpen, linkStatus]);

  return (
    <div className={clsx(styles.accordion, filter && styles['accordion--filter'])}>
      <div
        className={clsx(
          styles.accordion__header,
          isOpen && [styles['accordion__header--open'], modiferclassName],
          modiferclassName,
        )}>
        {href ? (
          <Link className={styles.accordion__link} href={href}>
            {name}
          </Link>
        ) : (
          <span className={clsx(styles.accordion__name, className)}>{name}</span>
        )}
        <Button
          className={styles['accordion__button']}
          variant="button--with-icon"
          type="button"
          aria-expanded={isOpen}
          aria-controls="accordion-item"
          onClick={clickHandler}>
          <ArrowDown />
        </Button>
      </div>
      <AnimateHeight id="accordion-item" height={isOpen ? 'auto' : 0}>
        {children}
      </AnimateHeight>
    </div>
  );
};

AccordionItem.displayName = TAG;

export default AccordionItem;
