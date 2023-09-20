import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { loginTokenBody } from 'config/token';
import getToken from 'utils/Hybris/User/getToken';
import loginUser from 'utils/Hybris/User/loginUser';

export interface LoginData {
  password: string;
  username: string;
}

function useLogin() {
  const [loginData, setLoginData] = useState<LoginData | null>(null);
  const [loginTrigger, setLoginTrigger] = useState(false);

  const tokenRequestBody = {
    ...loginTokenBody,
    username: loginData?.username ?? '',
    password: loginData?.password ?? '',
  };
  const newLoginToken = useQuery({
    queryKey: ['getLoginToken', tokenRequestBody],
    queryFn: getToken,
    enabled: !!loginData,
  });

  const loginResponse = useQuery({
    queryKey: ['loginUser', `${newLoginToken.data?.token_type} ${newLoginToken.data?.access_token}`],
    queryFn: loginUser,
    enabled: !!loginData && !!newLoginToken,
    onSuccess: () => {
      setLoginData(null);
      setLoginTrigger(true);
    },
  });

  const login = (data: LoginData) => setLoginData(data);

  return {
    login,
    loggedInUser: loginResponse.data,
    newLoginToken: newLoginToken.data,
    loginTrigger,
    setLoginTrigger,
    loginStatus: loginResponse.status,
  };
}

export default useLogin;
