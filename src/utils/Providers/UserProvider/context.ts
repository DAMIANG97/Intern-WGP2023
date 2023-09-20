import { createContext } from 'react';

import noop from 'lodash/noop';
import { LoginData } from 'utils/Hooks/useLogin';
import { RegisterData } from 'utils/Hybris/User/registerUser';

export interface Token {
  access_token: string;
  expires_in?: number;
  refresh_token?: string;
  scope: string;
  token_type: string;
}
export type UserStatus = 'loggedIn' | 'notLoggedIn' | 'loggedOut';

type FetchStatus = 'success' | 'error' | 'loading' | 'idle';

export interface UserContextValue {
  user: 'current' | 'anonymous';
  token: string;
  startRegister: (data: RegisterData) => void;
  login: (data: LoginData) => void;
  logout: () => void;
  authStatus: {
    userStatus: UserStatus;
    registerStatus: FetchStatus;
    loginStatus: FetchStatus;
  };
}

export const initialValue: UserContextValue = {
  user: 'anonymous',
  token: '',
  startRegister: noop,
  login: noop,
  logout: noop,
  authStatus: {
    userStatus: 'notLoggedIn',
    registerStatus: 'idle',
    loginStatus: 'idle',
  },
};

export const UserContext = createContext<UserContextValue>(initialValue);
