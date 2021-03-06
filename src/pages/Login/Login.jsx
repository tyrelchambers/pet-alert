import React from 'react';
import './Login.css'
import Display from '../../layouts/Display/Display';
import LoginForm from '../../components/forms/LoginForm';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <Display>
      <div className="container align-center flex-column mx-auto">
        <h1 className="title-lg text-center">Login</h1>

        <LoginForm />
        <div className="flex flex-row justify-center items-center mt-4">
          <p>Or</p> 
          <NavLink to="/register" className="link ml-2">Register</NavLink>
        </div>
      </div>
    </Display>
  );
}

export default Login;
