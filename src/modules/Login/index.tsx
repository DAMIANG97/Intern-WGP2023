import React from 'react';

import Button from 'components/Atoms/Button';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <div>
      <Button>Log In</Button>
      <Button>Sign Up</Button>
    </div>
  );
};

export default Login;
