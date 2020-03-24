import React from 'react';
import './forms.css'
import { MainButton } from '../buttons/buttons';

const RegisterForm = () => {

  const submitHandler = e => {
    e.preventDefault()
    window.location.pathname = '/dashboard'
  }
  
  return (
    <form className="form">
      <div className="field-group">
        <label htmlFor="email" className="label">Email</label>
        <input type="text" className="input" name="email" placeholder="user@example.com"/>
      </div>

      <div className="field-group">
        <label htmlFor="password" className="label">Password</label>
        <input type="password" className="input" name="password" placeholder="enter your password"/>
      </div>

      <div className="field-group">
        <label htmlFor="confirmPassword" className="label">Confirm Password</label>
        <input type="password" className="input" name="confirmPassword" placeholder="please confirm password"/>
      </div>

      <div className="mt-8">
        <MainButton 
          icon={<i className="fas fa-check mr-4"></i>}
          text="Register"
          onClick={e => submitHandler(e)}
        />
      </div>
    </form>
  );
}

export default RegisterForm;
