import React from 'react';
import { MainButton } from '../buttons/buttons';
import { inject, observer } from 'mobx-react';

const NewContactForm = ({ModalStore, UserStore}) => {
  const [ contact, setContact ] = React.useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  })

  const submitHandler = (e) => {
    e.preventDefault();
    UserStore.submitContact(contact)
    ModalStore.setIsOpen(false)
  }

  return (
    <form className="form form-white center">
      <div className="field-group">
        <label htmlFor="firstName" className="label">First Name</label>
        <input type="text" className="input" name="firstName" placeholder="your first name" value={contact.firstName} onChange={(e) => setContact({...contact, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="lastName" className="label">Last Name</label>
        <input type="text" className="input" name="lastName" placeholder="your last name" value={contact.lastName} onChange={(e) => setContact({...contact, [e.target.name]: e.target.value})}/>
      </div>

      <div className="field-group">
        <label htmlFor="phone" className="label">Phone Number (optional)</label>
        <input type="tel" className="input" name="phoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="000-000-0000" value={contact.phoneNumber} onChange={(e) => setContact({...contact, [e.target.name]: e.target.value})}/>
      </div>

      <MainButton
        icon={<i className="fas fa-arrow-alt-circle-right mr-4"></i>}
        text="Save contact"
        onClick={e => submitHandler(e)}
      />
    </form>
  );
}

export default inject("ModalStore", "UserStore")(observer(NewContactForm));
