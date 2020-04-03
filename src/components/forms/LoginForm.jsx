import React from 'react';
import { MainButton } from '../buttons/buttons';
import { inject, observer } from 'mobx-react';
import {toast} from 'react-toastify'

const LoginForm = ({UserStore}) => {
  const [ creds, setCreds ] = React.useState({
    email: "",
    password: ""
  })

  const submitHandler = (e) => {
    e.preventDefault()
    const errors = []

    if (!creds.email) {
      errors.push("Email cannot be empty")
    }

    if (!creds.password) {
      errors.push("Password cannot be empty")
    } 

    if (errors.length > 0) {
      for (let i = 0; i < errors.length; i++) {
        toast.error(errors[i])
      }
      return;
    }

    UserStore.login(creds)
  }

  return (
    <form className="form center">
      <div className="field-group">
        <label htmlFor="email" className="label">Email</label>
        <input type="text" className="input" name="email" placeholder="user@example.com" value={creds.email} onChange={e => setCreds({...creds, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="password" className="label">Password</label>
        <input type="password" className="input" name="password" placeholder="enter your password" value={creds.password} onChange={e => setCreds({...creds, [e.target.name]: e.target.value})}/>
      </div>

      <div className="mt-8">
        <MainButton 
          icon={<i className="fas fa-check mr-4"></i>}
          text="Login"
          onClick={e => submitHandler(e)}
        />
      </div>
    </form>
  );
}

export default inject("UserStore")(observer(LoginForm));
