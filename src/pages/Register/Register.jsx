import React from 'react';
import RegisterForm from '../../components/forms/RegisterForm';
import { NavLink } from 'react-router-dom';
import Display from '../../layouts/Display/Display';

const Register = () => {
  return (
    <Display>
      <div className="container align-center flex-column mx-auto">
        <h1 className="title-lg text-center">Create your account</h1>

        <RegisterForm />
        <div className="flex flex-row justify-center items-center mt-4">
          <p>Or </p> 
          <NavLink to="/login" className="link ml-2">Login</NavLink>
        </div>
      </div>
    </Display>
  );
}

export default Register;
