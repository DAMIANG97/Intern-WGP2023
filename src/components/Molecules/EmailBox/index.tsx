import React from 'react';
import { useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import ArrowButton from 'components/Atoms/ArrowButton';
import Input from 'components/Atoms/Input';
import validationSchema from 'utils/Validation/newsletterValidation';

import boxStyles from './EmailBox.module.scss';
import styles from 'components/Molecules/SearchBox/SearchBox.module.scss';

interface TypeFormInput {
  email: string;
}

const EmailBox = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeFormInput>({
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = () => {
    reset();
  };

  return (
    <div className={boxStyles.emailBox__container}>
      <form noValidate onSubmit={handleSubmit(onSubmit)} className={styles['search-form']}>
        <Input
          placeholder={t('components.createAccount.emailPlaceholder')}
          className={clsx(styles['search-input'], boxStyles.emailBox__input)}
          aria-label={t('components.createAccount.label')}
          type="email"
          id="email"
          {...register('email', {
            required: true,
          })}
          autoComplete="email"
        />
        <ArrowButton />
      </form>
      <div className={boxStyles.emailBox__errorMessageContainer}>
        <p className={boxStyles.emailBox__errorMessageText}>
          {errors.email?.message && t(errors.email.message as TranslationKeys['common'])}
        </p>
      </div>
    </div>
  );
};
//
export default EmailBox;
