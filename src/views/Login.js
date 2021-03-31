import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Box from '@material-ui/core/Box';
import React from 'react';

const Login = () => {
  return (
    <Box display="flex" m={10}>
      <LoginForm/>
      <RegisterForm/>
    </Box>
  );
};

export default Login;
