import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import loginUser from 'utils/Hybris/User/loginUser';
import { RegisterUserResponse } from 'utils/Hybris/User/registerUser';
import { Token } from 'utils/Providers/UserProvider/context';

function useReturningUser(token: Token, currentUser: RegisterUserResponse | 'anonymous') {
  const [trigger, setTrigger] = useState(false);
  const loginResponse = useQuery({
    queryKey: ['loginReturningUser', `${token.token_type} ${token.access_token}`],
    queryFn: loginUser,
    enabled: trigger,
    onSuccess: () => {
      setTrigger(false);
    },
  });
  useEffect(() => {
    if (token.access_token.length !== 0 && currentUser === 'anonymous' && !loginResponse.data) {
      setTrigger(true);
    }
  }, [currentUser, loginResponse.data, token.access_token.length]);

  const returningUser = loginResponse.isSuccess ? loginResponse.data : null;
  return { returningUser };
}

export default useReturningUser;
