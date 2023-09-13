import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import FormInputText from 'components/Molecules/FormInputText';

import styles from './CreateAccountForm.module.scss';

const TAG = 'CreateAccountForm';

const CreateAccountForm = () => {
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm();

  const onValid: SubmitHandler<FieldValues> = () => {
    //TO DO add function from provider when its ready
    //const body = JSON.stringify(e);
    //...
  };

  return (
    <form name={TAG} className={styles.form} onSubmit={handleSubmit(onValid)}>
      <span className={styles.title}>{t('components.createAccountForm.personalInformation')}</span>
      <FormInputText
        name={t('components.createAccountForm.firstName')}
        register={register}
        errors={errors}
        required={true}
      />
      <FormInputText
        name={t('components.createAccountForm.lastName')}
        register={register}
        errors={errors}
        required={true}
      />
      <span className={clsx(styles.title, styles['title--last'])}>{t('components.createAccountForm.security')}</span>
      <FormInputText
        name={t('components.createAccountForm.email')}
        register={register}
        errors={errors}
        required={true}
      />
      <FormInputText
        name={t('components.createAccountForm.password')}
        register={register}
        errors={errors}
        required={true}
      />
      <FormInputText
        name={t('components.createAccountForm.confirmPassword')}
        register={register}
        errors={errors}
        required={true}
      />
      <div className={styles['button-background']}>
        <Button disabled={isSubmitting || !isValid} className={styles.button} variant="green" type="submit">
          {t('components.createAccountForm.submit')}
        </Button>
        {/* ToDo Get status from response (Provider) */}
        {status === 'error' && <span className={styles.alert}>{t('components.createAccountForm.error')}</span>}
      </div>
    </form>
  );
};

CreateAccountForm.displayName = TAG;
export default CreateAccountForm;
