import React, { Dispatch, SetStateAction, useState } from 'react';

import ArrowDown from 'assets/icons/arrowDown.svg';
import { clsx } from 'clsx';

import styles from './Select.module.scss';

export interface SelectProps {
  options: Array<string>;
  selectedOption: string | null;
  setSelectedOption: Dispatch<SetStateAction<string | null>>;
}

const Select = ({ options, setSelectedOption, selectedOption }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <>
      <div className={styles.select__container}>
        <button
          type="button"
          className={clsx(styles.select__header, isOpen && styles['select__header--open'])}
          onClick={handleToggle}>
          {selectedOption || 'English'}
          <ArrowDown
            className={`
            ${clsx('', isOpen && styles['select--rotateIconUp'])}
            ${clsx(styles['select__iconStyle'])}`}
          />
        </button>
        <ul className={clsx(styles['select__list'], isOpen && styles['select__list--open'])}>
          {options.map((option) => (
            <li key={option}>
              <button className={styles['select__listItem']} onClick={onOptionClicked(option)} type="button">
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
