import { FunctionComponent, useContext, useEffect } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import clsx from 'clsx';
import Button from 'components/Atoms/Button';
import FormTitle from 'components/Atoms/FormTitle';
import FormInputPassword from 'components/Molecules/FormInputPassword';
import FormInputText from 'components/Molecules/FormInputText';
import { EMAIL_REGEX, PASSWORD_REGEX } from 'config/consts';
import { StepIndexes } from 'modules/Checkout';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './CreateAccountForm.module.scss';

interface CreateAccountFormProps {
  handleStepChange?: (step: StepIndexes) => void;
}
const TAG = 'CreateAccountForm';

const CreateAccountForm: FunctionComponent<CreateAccountFormProps> = ({ handleStepChange }) => {
  const { authStatus, startRegister } = useContext(UserContext);
  const { registerStatus } = authStatus;
  const { t } = useTranslation('common');
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm({ mode: 'onBlur' });

  const onValid: SubmitHandler<FieldValues> = (e) => {
    const registerData = {
      uid: e[t('components.createAccountForm.email')],
      firstName: e[t('components.createAccountForm.firstName')],
      lastName: e[t('components.createAccountForm.lastName')],
      password: e[t('components.createAccountForm.password')],
    };
    startRegister(registerData);
  };

  useEffect(() => {
    if (registerStatus === 'success' && handleStepChange !== undefined) {
      handleStepChange(StepIndexes.DELIVERY);
    }
  }, [handleStepChange, registerStatus]);

  return (
    <form name={TAG} className={styles.form} onSubmit={handleSubmit(onValid)}>
      <FormTitle>{t('components.createAccountForm.title')}</FormTitle>
      <span className={styles.title}>{t('components.createAccountForm.personalInformation')}</span>
      <FormInputText
        name={t('components.createAccountForm.firstName')}
        register={register}
        errors={errors}
        required={true}
        autoComplete="given-name"
      />
      <FormInputText
        name={t('components.createAccountForm.lastName')}
        register={register}
        errors={errors}
        required={true}
        autoComplete="family-name"
      />
      <span className={clsx(styles.title, styles['title--last'])}>{t('components.createAccountForm.security')}</span>
      <FormInputText
        name={t('components.createAccountForm.email')}
        register={register}
        errors={errors}
        required={true}
        autoComplete="email"
        validate={(email) => {
          return EMAIL_REGEX.test(email) || t('components.loginForm.emailError');
        }}
      />
      <FormInputPassword
        name={t('components.createAccountForm.password')}
        register={register}
        errors={errors}
        required={true}
        autoComplete="new-password"
        validate={(password) => {
          return PASSWORD_REGEX.test(password) || t('components.createAccountForm.passwordError');
        }}
      />
      <FormInputPassword
        name={t('components.createAccountForm.confirmPassword')}
        register={register}
        errors={errors}
        required={true}
        autoComplete="new-password"
        validate={(value, formValues) => {
          const password = formValues[t('components.createAccountForm.password')];
          return value === password || t('components.createAccountForm.samePassword');
        }}
      />
      <div className={styles['button-background']}>
        <Button
          disabled={isSubmitting || (isSubmitted && !isValid) || !isValid}
          className={styles.button}
          variant="green"
          type="submit">
          {t('components.createAccountForm.submit')}
        </Button>
        <div>
          {registerStatus === 'error' && (
            <span className={styles.alert}>{t('components.createAccountForm.error')}</span>
          )}
          {registerStatus === 'success' && (
            <span className={styles.success}>{t('components.createAccountForm.success')}</span>
          )}
        </div>
      </div>
    </form>
  );
};

CreateAccountForm.displayName = TAG;
export default CreateAccountForm;
