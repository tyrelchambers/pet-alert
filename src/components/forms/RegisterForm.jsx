import React from 'react';
import './forms.css'
import { MainButton } from '../buttons/buttons';
import {toast} from 'react-toastify'
import { inject, observer } from 'mobx-react';

const RegisterForm = ({UserStore}) => {
  const [ credentials, setCredentials ] = React.useState({
    email: "",
    password: "",
    confirmPassword: ""
  })

  const submitHandler = e => {
    e.preventDefault()
    const errors = []

    if (!credentials.email) {
      errors.push("Email cannot be empty")
    }

    if (!credentials.password) {
      errors.push("Password cannot be empty")
    } 

    if (!credentials.confirmPassword) {
      errors.push("Please confirm password")
    }

    if (credentials.password !== credentials.confirmPassword) {
      errors.push("Passwords don't match")
    }

    if (errors.length > 0) {
      for (let i = 0; i < errors.length; i++) {
        toast.error(errors[i])
      }
      return;
    }

    UserStore.register(credentials);
  }
  
  return (
    <form className="form">
      <div className="field-group">
        <label htmlFor="email" className="label">Email</label>
        <input type="text" className="input" name="email" placeholder="user@example.com" value={credentials.email} onChange={(e) => setCredentials({...credentials, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="password" className="label">Password</label>
        <input type="password" className="input" name="password" placeholder="enter your password" value={credentials.password} onChange={(e) => setCredentials({...credentials, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="confirmPassword" className="label">Confirm Password</label>
        <input type="password" className="input" name="confirmPassword" placeholder="please confirm password" value={credentials.confirmPassword} onChange={(e) => setCredentials({...credentials, [e.target.name]: e.target.value})}/>
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

export default inject("UserStore")(observer(RegisterForm));
