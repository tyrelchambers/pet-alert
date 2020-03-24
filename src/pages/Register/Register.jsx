import React from 'react';
import Header from '../../layouts/Header/Header';
import RegisterForm from '../../components/forms/RegisterForm';

const Register = () => {
  return (
    <div>
      <Header />

      <div className="container align-center flex-column mx-auto mt-16">
        <h1 className="title-lg text-center">Register your serial number</h1>

        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
