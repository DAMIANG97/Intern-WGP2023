import React, { FunctionComponent, useEffect, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import Link from 'next/link';

import ArrowDown from 'assets/icons/arrowDown.svg';
import clsx from 'clsx';
import Button from 'components/Button';

import styles from './AccordionItem.module.scss';

interface AccordionItemProps {
  children: React.ReactElement;
  name: string;
  href?: string;
  parentOpen?: boolean;
}

const TAG = 'AccordionItem';

const AccordionItem: FunctionComponent<AccordionItemProps> = ({ children, name, href, parentOpen }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const clickHandler = () => setIsOpen((is) => !is);
  useEffect(() => {
    if (parentOpen === false) {
      setIsOpen(false);
    }
  }, [setIsOpen, parentOpen]);

  return (
    <div className={styles.accordion__container}>
      <div className={clsx(styles.accordion__header, isOpen && styles['accordion__header--open'])}>
        {href ? (
          <Link className={styles.accordion__link} href={href}>
            {name}
          </Link>
        ) : (
          <span className={styles.accordion__name}>{name}</span>
        )}
        <Button
          className={styles['accordion__button']}
          withIcon
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
