import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import Login from 'modules/Login';
import { getLocaleOptions } from 'utils/Hybris/getLocaleOptions';

interface LoginPageProps extends ComponentProps<typeof Login> {}

const LoginPage: NextPage<LoginPageProps> = Login;

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async ({ locale, req }) => {
  const currency = req.cookies['NEXT_CURRENCY'] || 'USD';
  const localeOptions = await getLocaleOptions(locale, currency);
  return {
    props: {
      localeOptions: localeOptions,
    },
  };
};
export default LoginPage;
