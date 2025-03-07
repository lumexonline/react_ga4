
import React from 'react';
import { setUserId } from '../utils/analytics';

function Login() {
  const handleLogin = () => {
    setUserId('user123');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
    