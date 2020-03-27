import React from 'react';
import { MainButton } from '../buttons/buttons';

const LoginForm = () => {
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

      <div className="mt-8">
        <MainButton 
          icon={<i className="fas fa-check mr-4"></i>}
          text="Login"
        />
      </div>
    </form>
  );
}

export default LoginForm;
