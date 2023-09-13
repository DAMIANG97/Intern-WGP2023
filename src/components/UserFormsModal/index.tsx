import React, { FunctionComponent, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

import CloseIcon from 'assets/icons/close.svg';
import Button from 'components/Atoms/Button';
import useClickOutside from 'utils/Hooks/useClickOutside';

import styles from './UserFormsModal.module.scss';

interface UserFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserFormModal: FunctionComponent<UserFormProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const { t } = useTranslation('common');
  useClickOutside(modalRef, onClose);
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.header}>
          <Button
            onClick={onClose}
            type="button"
            variant="button--with-icon"
            className={styles.close}
            aria-label={t('components.modal.close')}>
            <CloseIcon />
          </Button>
        </div>
        <div className={styles.content}>
          <div className={styles.form}>Formularz 1</div>
          <div className={styles.form}>Formularz 2</div>
        </div>
      </div>
    </div>
  );
};

export default UserFormModal;
