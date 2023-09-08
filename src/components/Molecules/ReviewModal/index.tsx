import React, { FunctionComponent, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

import CloseButton from 'assets/icons/close.svg';
import useClickOutside from 'utils/Hooks/useClickOutside';

import styles from './ReviewModal.module.scss';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal: FunctionComponent<ReviewModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('product');
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => {
    onClose();
  });

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles['modal-btn']} onClick={onClose} type="button">
          <CloseButton className={styles.close} />
        </button>
        <div className={styles.content}>
          <p>{t('components.reviewModal.message')}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
