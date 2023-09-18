import React, { FunctionComponent, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

import CloseIcon from 'assets/icons/close.svg';
import Button from 'components/Atoms/Button';
import useClickOutside from 'utils/Hooks/useClickOutside';

import styles from './UserFormsModal.module.scss';

interface UserFormProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const UserFormModal: FunctionComponent<UserFormProps> = ({ isOpen, onClose, children }) => {
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
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default UserFormModal;
