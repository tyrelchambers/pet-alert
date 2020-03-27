import React from 'react';
import RegisterForm from '../../components/forms/RegisterForm';
import { NavLink } from 'react-router-dom';
import Display from '../../layouts/Display/Display';

const Register = () => {
  return (
    <Display>
      <div className="container align-center flex-column mx-auto mt-16">
        <h1 className="title-lg text-center">Create your account</h1>

        <RegisterForm />
        <div className="flex flex-row justify-center items-center">
          <p>Or</p> 
          <NavLink to="/login" className="link">Login</NavLink>
        </div>
      </div>
    </Display>
  );
}

export default Register;
