import React, { FunctionComponent, useContext } from 'react';

import { useMutation } from '@tanstack/react-query';
import DeleteIcon from 'assets/icons/delete.svg';
import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import SmallLoader from 'components/Atoms/SmallLoader';
import deleteCartEntry from 'utils/Hybris/Cart/deleteCartEntry';
import { CartContext } from 'utils/Providers/CartProvider/context';

import styles from './DeleteEntryButton.module.scss';

interface DeleteEntryButtonProps {
  user: string;
  entryNumber: number;
  className?: string;
  token: string;
}

const TAG = 'DeleteEntryButton';

const DeleteEntryButton: FunctionComponent<DeleteEntryButtonProps> = ({ user, entryNumber, className, token }) => {
  const { cartRefresh, cartGUID, isRefetching } = useContext(CartContext);
  const { mutate, isLoading } = useMutation(deleteCartEntry);
  const clickHandler = () => {
    mutate(
      {
        userId: user,
        cartId: cartGUID,
        entryNumber: entryNumber,
        token: token,
      },
      { onSuccess: () => cartRefresh() },
    );
  };
  return (
    <Button
      type="button"
      variant="button--with-icon"
      className={clsx(styles['product-delete-button'], className)}
      onClick={clickHandler}>
      {isLoading || isRefetching ? <SmallLoader /> : <DeleteIcon />}
    </Button>
  );
};

DeleteEntryButton.displayName = TAG;

export default DeleteEntryButton;
