import React, { FunctionComponent, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import noop from 'lodash/noop';
import useLogin from 'utils/Hooks/useLogin';
import useLogout from 'utils/Hooks/useLogout';
import useRegistration from 'utils/Hooks/useRegistration';
import useReturningUser from 'utils/Hooks/useReturningUser';
import useStateCache from 'utils/Hooks/useStateCache';
import { RegisterUserResponse } from 'utils/Hybris/User/registerUser';

import { Token, UserContext, UserContextValue, UserStatus } from './context';

interface UserProviderProps {
  children: ReactNode;
}
const TAG = 'UserProvider';

const emptyToken = {
  access_token: '',
  refresh_token: '',
  scope: '',
  token_type: '',
};

const UserProvider: FunctionComponent<UserProviderProps> = ({ children }) => {
  const [token, setToken] = useStateCache<Token>('token', emptyToken);
  const [userStatus, setUserStatus] = useState<UserStatus>('notLoggedIn');
  const [currentUser, setCurrentUser] = useState<RegisterUserResponse | 'anonymous'>('anonymous');
  const { newLoginToken, login, loggedInUser, loginTrigger, setLoginTrigger, loginStatus } = useLogin();
  const { newToken, registerStatus, startRegister, newUser, registerTrigger, setRegisterTrigger } =
    useRegistration(login);
  const { logout, logoutTrigger, setLogoutTrigger } = useLogout(token);
  const { returningUser } = useReturningUser(token, currentUser);
  const assignUser = useCallback(
    (
      token: Token,
      user: RegisterUserResponse | 'anonymous',
      trigger: (value: React.SetStateAction<boolean>) => void,
      status: UserStatus,
    ) => {
      setToken(token);
      setCurrentUser(user);
      trigger(false);
      setUserStatus(status);
    },
    [setToken],
  );

  useEffect(() => {
    if (returningUser && currentUser === 'anonymous' && userStatus === 'notLoggedIn') {
      //auto login when opening page
      assignUser(token, returningUser, noop, 'loggedIn');
    }
    if (loginTrigger && newLoginToken && loggedInUser && userStatus === 'notLoggedIn') {
      //login
      assignUser(newLoginToken, loggedInUser, setLoginTrigger, 'loggedIn');
    }
    if (logoutTrigger && userStatus === 'loggedIn') {
      // logout
      assignUser(emptyToken, 'anonymous', setLogoutTrigger, 'loggedOut');
    }
  }, [
    newToken,
    newLoginToken,
    setToken,
    newUser,
    loggedInUser,
    loginTrigger,
    logoutTrigger,
    setLoginTrigger,
    setLogoutTrigger,
    registerTrigger,
    setRegisterTrigger,
    assignUser,
    returningUser,
    currentUser,
    token,
    userStatus,
  ]);
  const context = useMemo<UserContextValue>(
    () => ({
      user: currentUser === 'anonymous' ? 'anonymous' : 'current',
      token: `${token.token_type} ${token.access_token}`,
      startRegister,
      login,
      logout,
      authStatus: {
        userStatus: userStatus,
        loginStatus: loginStatus,
        registerStatus: registerStatus,
      },
    }),
    [currentUser, userStatus, token, startRegister, registerStatus, login, loginStatus, logout],
  );
  return <UserContext.Provider value={context}>{children}</UserContext.Provider>;
};

UserProvider.displayName = TAG;

export default UserProvider;
