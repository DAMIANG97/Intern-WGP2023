import React, { ComponentProps } from 'react';

import clsx from 'clsx';

import styles from './TextComponent.module.scss';

interface TextComponentProps extends ComponentProps<'p'> {}

const TextComponent = ({ children, className }: TextComponentProps) => {
  return <p className={clsx(styles.textComponent__description, className)}>{children}</p>;
};

export default TextComponent;
