import { useContext } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import Button from 'components/Atoms/Button';
import FormTitle from 'components/Atoms/FormTitle';
import FormInputPassword from 'components/Molecules/FormInputPassword';
import FormInputText from 'components/Molecules/FormInputText';
import { EMAIL_REGEX } from 'config/consts';
import { UserContext } from 'utils/Providers/UserProvider/context';

import styles from './LoginForm.module.scss';

const TAG = 'LoginForm';

const LoginForm = () => {
  const { t } = useTranslation('common');
  const { login, authStatus } = useContext(UserContext);
  const { loginStatus } = authStatus;
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm({ mode: 'onBlur' });

  const onValid: SubmitHandler<FieldValues> = (e) => {
    login({
      username: e[t('components.createAccountForm.email')],
      password: e[t('components.createAccountForm.password')],
    });
  };

  return (
    <form name={TAG} className={styles.form} onSubmit={handleSubmit(onValid)}>
      <FormTitle>{t('components.loginForm.title')}</FormTitle>

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
        autoComplete="current-password"
      />
      <div className={styles['button-background']}>
        <Button
          disabled={isSubmitting || (isSubmitted && !isValid)}
          className={styles.button}
          variant="green"
          type="submit">
          {t('components.loginForm.submit')}
        </Button>
        {loginStatus === 'error' && <span className={styles.alert}>{t('components.createAccountForm.error')}</span>}
      </div>
    </form>
  );
};

LoginForm.displayName = TAG;

export default LoginForm;
