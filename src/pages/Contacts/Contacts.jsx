import React from 'react';
import './Contacts.css'
import Display from '../../layouts/Display/Display';
import { inject, observer } from 'mobx-react';
import { MainButton, SecButton } from '../../components/buttons/buttons';
import NewContactForm from '../../components/forms/NewContactForm';
import HomeSubNav from '../../layouts/HomeSubNav/HomeSubNav';
import DashboardDisplay from '../../layouts/DashboardDisplay/DashboardDisplay';

const Contacts = ({ModalStore, UserStore}) => {
  const [contacts, setContacts] = React.useState([])

  const contactList = contacts.map((x, id) => 
    <div className="contact-item flex flex-col items-center m-4" key={id}>
      <p className="text-3xl font-bold accent-primary">{x.firstName} {x.lastName}</p>
      <p>{x.phoneNumber}</p>
      <div className="mt-4">
        <SecButton
          text="Delete contact"
          classes="danger"
        />
      </div>
    </div>
  )
  return (
    <Display>
     <DashboardDisplay>
      <div className="flex flex-row justify-between">
          <h1 className="title-lg">Contacts</h1>
          <div className="max-w-sm">
            <MainButton
              icon={<i className="fas fa-plus mr-4"></i>}
              text="Add contact"
              onClick={() => {
                ModalStore.setIsOpen(true)
                ModalStore.setRender(<NewContactForm />)
              }}
            />
          </div>  
        </div>

        <div className="contacts-body">
          <p>Add your basic contact information just incase someone finds your pet and needs to reach you.</p>

          <div className="mt-8">
            {contacts.length === 0 &&
              <div className="bg">
                <p>No registered contacts</p>
              </div> 
            }

            {contacts.length > 0 &&
              <div className="flex flex-row">
                {contactList}
              </div>
            }
          </div>
        </div>
     </DashboardDisplay>
      
    </Display>
  );
}

export default inject("ModalStore", "UserStore")(observer(Contacts));
