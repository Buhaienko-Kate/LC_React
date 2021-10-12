import React from 'react';

// input: props
// output: jsx
const Login = ({ onLogin }) => (
  <button className="login btn" onClick={onLogin}>
    Login
  </button>
);
export default Login;
