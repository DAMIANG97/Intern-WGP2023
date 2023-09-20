import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { registrationTokenBody } from 'config/token';
import revokeToken from 'utils/Hybris/User/revokeToken';
import { Token } from 'utils/Providers/UserProvider/context';

function useLogout(token: Token) {
  const [startQuery, setStartQuery] = useState(false);
  const [logoutTrigger, setLogoutTrigger] = useState(false);
  const queryBody = {
    token: token.access_token,
    client_id: registrationTokenBody.client_id,
    client_secret: registrationTokenBody.client_secret,
  };
  const revokeTokenResponse = useQuery({
    queryKey: ['revokeToken', queryBody],
    queryFn: revokeToken,
    enabled: startQuery,
    onSuccess: () => {
      setStartQuery(false);
      setLogoutTrigger(true);
    },
  });
  const logout = () => setStartQuery(true);
  return { revokeTokenResponse, logout, logoutTrigger, setLogoutTrigger };
}

export default useLogout;
