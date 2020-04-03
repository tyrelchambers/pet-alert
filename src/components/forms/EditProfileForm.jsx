import React from 'react';
import { SecButton } from '../buttons/buttons';
import { inject, observer } from 'mobx-react';
import {toast} from 'react-toastify'

const EditProfileForm = ({UserStore}) => {
  const [basic, setBasic] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  })

  const [account, setAccount] = React.useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  })

  const submitBasic = (e) => {
    e.preventDefault()

    if (!basic.firstName && !basic.lastName && !basic.phoneNumber) return;

    UserStore.submitBasic(basic)
  }

  const submitAccount = (e) => {
    e.preventDefault()
    const errors = []

    if (!account.currentPassword && (account.newPassword || account.confirmNewPassword)) {
      errors.push("Must provide your current password")
    }

    if (account.currentPassword && !account.newPassword) {
      errors.push("Please provide a new password")
    }

    if (account.newPassword && !account.confirmNewPassword) {
      errors.push("Please confirm your new password")
    }

    if (account.newPassword !== account.confirmNewPassword) {
      errors.push("Passwords don't match")
    }
    if (errors.length > 0) {
      for (let i = 0; i < errors.length; i++) {
        toast.error(errors[i])
      }
      return;
    }

    UserStore.submitAccount(account);
  }

  return (
    <form className="form form-white">
      <div className="field-group">
        <div className="flex flex-row items-center">
          <input type="checkbox" name="showPhoneNumber" id="showPhoneNumber" className="mb-2 mr-4"/>
          <label htmlFor="showPhoneNumber" className="label">Show phone number</label>

        </div>
        <p>Show your phone number with each serial number? Used when someone needs to contact you about a lost pet.</p>
      </div>
      <div className="field-group">
        <div className="flex flex-row items-center">
          <input type="checkbox" name="autoNotify" id="autoNotify" className="mb-2 mr-4"/>
          <label htmlFor="autoNotify" className="label">Notify me when a QR code is scanned?</label>
        </div>
        <p>Receive an email when a pet's QR code is scanned</p>
      </div>
      <hr/>
      <h2 className="title-md mb-2">Basic Information</h2>
      <div className="field-group">
        <label htmlFor="firstName" className="label">First name</label>
        <input type="text" className="input" name="firstName" value={basic.firstName} placeholder="enter your first name"  onChange={e => setBasic({...basic, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="lastName" className="label">Last name</label>
        <input type="text" className="input" name="lastName" value={basic.lastName} placeholder="enter your last name" onChange={e => setBasic({...basic, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="phoneNumber" className="label">Phone Number</label>
        <input type="text" className="input" name="phoneNumber" value={basic.phoneNumber} placeholder="(0-000-0000)" onChange={e => setBasic({...basic, [e.target.name]: e.target.value})}/>
        <p>Your phone number to notifed if your pet's QR code is scanned</p>
      </div>

      <SecButton
        icon={<i className="fas fa-arrow-alt-circle-right mr-4"></i>}
        text="Save basic information"
        onClick={e => submitBasic(e)}
        disabled={(!basic.firstName && !basic.lastName &&!basic.phoneNumber)}
      />

      <hr/>

      <h2 className="title-md mb-2">Account</h2>
      <div className="field-group">
        <label htmlFor="email" className="label">Email</label>
        <input type="text" className="input" name="email" value={account.email} placeholder="enter your email"  onChange={e => setAccount({...account, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="currentPassword" className="label">Current password</label>
        <input type="text" className="input" name="currentPassword" value={account.currentPassword} placeholder="enter your current password" onChange={e => setAccount({...account, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="newPassword" className="label">New password</label>
        <input type="text" className="input" name="newPassword" value={account.newPassword} placeholder="enter your new password" onChange={e => setAccount({...account, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="confirmNewPassword" className="label">Confirm new password</label>
        <input type="text" className="input" name="confirmNewPassword" value={account.confirmNewPassword} placeholder="confirm your new password" onChange={e => setAccount({...account, [e.target.name]: e.target.value})}/>
      </div>

      <SecButton
        icon={<i className="fas fa-arrow-alt-circle-right mr-4"></i>}
        text="Save account information"
        onClick={e => submitAccount(e)}
        disabled={(!account.email && !account.currentPassword && !account.newPassword && !account.confirmNewPassword)}
      />
    </form>
  );
}

export default inject("UserStore")(observer(EditProfileForm));
