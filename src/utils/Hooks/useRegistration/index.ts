import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { registrationTokenBody } from 'config/token';
import { LoginData } from 'utils/Hooks/useLogin';
import getToken from 'utils/Hybris/User/getToken';
import registerUser, { RegisterData } from 'utils/Hybris/User/registerUser';

function useRegistration(login: (data: LoginData) => void) {
  const [userData, setUserData] = useState<RegisterData | null>(null);
  const [registerTrigger, setRegisterTrigger] = useState(false);
  const newToken = useQuery({
    queryKey: ['getToken', registrationTokenBody],
    queryFn: getToken,
    enabled: !!userData,
  });

  const register = useQuery({
    queryKey: ['registerUser', userData, `${newToken.data?.token_type} ${newToken.data?.access_token}`],
    queryFn: registerUser,
    enabled: !!userData,
    onSuccess: () => {
      setUserData(null);
      setRegisterTrigger(true);
      login({ username: userData?.uid ?? '', password: userData?.password ?? '' });
    },
  });

  const startRegister = (data: RegisterData) => setUserData(data);

  if (newToken.isSuccess && register.isSuccess) {
    return {
      newToken: newToken.data,
      registerStatus: register.status,
      startRegister,
      newUser: register.data,
      registerTrigger,
      setRegisterTrigger,
    };
  }
  return {
    newToken: null,
    registerStatus: register.status,
    startRegister,
    registerTrigger,
    setRegisterTrigger,
    newUser: null,
  };
}

export default useRegistration;
