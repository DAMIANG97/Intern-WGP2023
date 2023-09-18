import React, { FunctionComponent } from 'react';

import clsx from 'clsx';

import styles from './FormTitle.module.scss';

interface FormTitleProps {
  children: string;
  className?: string;
}

const FormTitle: FunctionComponent<FormTitleProps> = ({ children, className }) => {
  return <div className={clsx(styles.title, className)}>{children}</div>;
};

export default FormTitle;
