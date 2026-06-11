import React from 'react';
import AuthForm from '../components/AuthForm';

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[70vh]">
      <AuthForm isModal={false} />
    </div>
  );
};

export default Login;
