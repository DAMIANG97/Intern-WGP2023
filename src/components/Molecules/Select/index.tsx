import React, { useId, useState } from 'react';

import ArrowDown from 'assets/icons/arrowDown.svg';
import { clsx } from 'clsx';

import styles from './Select.module.scss';

export interface SelectProps {
  options: Array<string>;
  selectedOption: string | null;
  submitHandler: (value: string) => void;
  className?: string;
  label?: string;
  modifierClass?: string;
  listModifierClass?: string;
  name?: string;
  buttonId?: string;
}

const Select = ({
  options,
  submitHandler,
  selectedOption,
  className,
  label,
  modifierClass,
  listModifierClass,
  name,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    submitHandler(value);
    setIsOpen(false);
  };
  const labelId = useId();
  return (
    <div>
      <label className={clsx(styles.select__label, className)} htmlFor={name} id={labelId}>
        {label}
      </label>
      <div className={clsx(styles.select__container, className)}>
        <button
          type="button"
          className={clsx(styles.select__header, isOpen && styles['select__header--open'], modifierClass)}
          onClick={handleToggle}
          aria-controls={name}
          id="select-button"
          role="combobox"
          aria-expanded={isOpen}
          aria-labelledby={labelId}>
          {selectedOption || ''}
          <ArrowDown
            className={`
            ${clsx('', isOpen && styles['select--rotateIconUp'])}
            ${clsx(styles['select__iconStyle'])}`}
          />
        </button>
        <div
          className={clsx(styles['select__list'], isOpen && styles['select__list--open'], listModifierClass)}
          id={name}
          role="listbox"
          aria-labelledby="select-button">
          {options.map((option) => (
            <button
              role="option"
              aria-selected={option === selectedOption}
              key={option}
              className={styles['select__listItem']}
              onClick={onOptionClicked(option)}
              type="button">
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
