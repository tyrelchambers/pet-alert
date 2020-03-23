import React from 'react';
import './forms.css'
import { MainButton } from '../buttons/buttons';

const RegisterForm = () => {
  return (
    <form className="form">
      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Serial Number</label>
        <input type="text" className="input" name="serialNumber" placeholder="enter your serial number"/>
      </div>

      <div className="field-group">
        <label htmlFor="email" className="label">Email</label>
        <input type="text" className="input" name="email" placeholder="user@example.com"/>
      </div>

      <div className="field-group">
        <label htmlFor="password" className="label">Password</label>
        <input type="text" className="input" name="password" placeholder="enter your password"/>
      </div>

      <div className="field-group">
        <label htmlFor="confirmPassword" className="label">Confirm Password</label>
        <input type="text" className="input" name="confirmPassword" placeholder="please confirm password"/>
      </div>

      <div className="mt-8">
        <MainButton 
          icon={<i className="fas fa-check mr-4"></i>}
          text="Register"
        />
      </div>
    </form>
  );
}

export default RegisterForm;
