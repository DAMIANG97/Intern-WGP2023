import React, { Dispatch, SetStateAction, useState } from 'react';

import ArrowDown from 'assets/icons/arrowDown.svg';
import { clsx } from 'clsx';

import styles from './Select.module.scss';

export interface SelectProps {
  theme?: string;
  options: Array<string>;
  selectedOption: string | null;
  setSelectedOption: Dispatch<SetStateAction<string | null>>;
}

const Select = ({ theme, options, setSelectedOption, selectedOption }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <>
      <div>
        <button
          type="button"
          className={clsx(
            styles.select__header,
            styles['select__header--black'],
            theme !== 'dark' && styles['select__header--white'],
            isOpen && styles['select__header--open'],
          )}
          onClick={handleToggle}>
          {selectedOption || 'English'}
          <ArrowDown
            className={`
            ${clsx('', isOpen && styles['select--rotateIconUp'])}
            ${clsx(
              styles['select__iconStyle'],
            )}`}
          />
        </button>
            <ul
              className={clsx(
                styles['select__list'],
                styles['select__list--black'],
                theme !== 'dark' && styles['select__list--white'],
                isOpen && styles['select__list--open'],
              )}>
              {options.map((option) => (
                <li className={styles['select__listItem']} onClick={onOptionClicked(option)} key={option}>
                  {option}
                </li>
              ))}
            </ul>
      </div>
    </>
  );
};

export default Select;
