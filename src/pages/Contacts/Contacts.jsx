import React from 'react';
import './Contacts.css'
import Display from '../../layouts/Display/Display';
import { inject, observer } from 'mobx-react';
import { MainButton, SecButton } from '../../components/buttons/buttons';
import NewContactForm from '../../components/forms/NewContactForm';
import DashboardDisplay from '../../layouts/DashboardDisplay/DashboardDisplay';
import Axios from 'axios';

const Contacts = ({ModalStore, UserStore}) => {
  const [contacts, setContacts] = React.useState([])

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')

    const fn = async () => {
      await Axios.get(`${process.env.REACT_APP_BACKEND}/api/contacts`, {
        headers: {
          token
        }
      }).then(res => setContacts([...res.data]))
    }

    fn()
  }, []);

  const contactList = contacts.map((x, id) => 
    <div className="contact-item flex flex-row bg items-center m-4 w-full" key={id}>
      <div className="flex flex-col flex-1">
        <p className="text-3xl font-bold accent-primary">{x.firstName} {x.lastName}</p>
        <p>{x.phoneNumber}</p>
      </div>
      <div className="mt-4">
        <SecButton
          text="Delete contact"
          classes="danger mt-4"
          onClick={() => UserStore.deleteContact(x.uuid)}
        />
      </div>
    </div>
  )
  return (
    <Display>
     <DashboardDisplay>
      <div className="flex flex-row justify-between page-header">
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

        <div className="contacts-body mt-2">
          <p>Add your basic contact information just incase someone finds your pet and needs to reach you.</p>

          <div className="mt-8">
            {contacts.length === 0 &&
              <div className="bg">
                <p>No registered contacts</p>
              </div> 
            }

            {contacts.length > 0 &&
              <div className="flex flex-col">
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
