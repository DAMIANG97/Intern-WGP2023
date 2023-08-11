import { ComponentProps } from 'react';
import { GetServerSideProps, NextPage } from 'next';

import Login from 'modules/Login';
import apiFetch from 'utils/apiFetch';
import { BASESITE_URL, HOMEPAGE_ENDPOINT } from 'utils/Hybris/endpoints';
import getLangCurrSuffix from 'utils/Hybris/getLangCurrSuffix';
import getLocaleOptions from 'utils/Hybris/getLocaleOptions';
import getMenuContent from 'utils/Hybris/getMenuContent';

interface LoginPageProps extends ComponentProps<typeof Login> {}

const LoginPage: NextPage<LoginPageProps> = Login;

export const getServerSideProps: GetServerSideProps<LoginPageProps> = async ({ locale, req }) => {
  const localeSuffix = getLangCurrSuffix(locale, req.cookies['NEXT_CURRENCY']);
  const localeOptions = await getLocaleOptions(localeSuffix);
  const data = await apiFetch<Hybris.PageContent>(`${BASESITE_URL}/${HOMEPAGE_ENDPOINT}?${localeSuffix}`);
  const menuContent = await getMenuContent(data, localeSuffix);

  return {
    props: {
      localeOptions: localeOptions,
      menuContent: menuContent,
    },
  };
};
export default LoginPage;
