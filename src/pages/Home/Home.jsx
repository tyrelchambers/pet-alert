import React from 'react';
import { MainButton } from '../../components/buttons/buttons';
import { inject, observer } from 'mobx-react';
import NewSerialForm from '../../components/forms/NewSerialForm';
import Display from '../../layouts/Display/Display';
import Serials from '../../layouts/Serials/Serials';

const Home = ({ModalStore, SerialStore}) => {

  return (
    <Display>
      <div className="flex flex-row justify-between">
        <h1 className="title-lg">Profile</h1>
        <div className="max-w-sm">
          <MainButton
            icon={<i className="fas fa-plus mr-4"></i>}
            text="Add serial number"
            onClick={() => {
              ModalStore.setIsOpen(true)
              ModalStore.setRender(<NewSerialForm />)
            }}
          />
        </div>  
      </div>
    
      <Serials />
    </Display>
  );
}

export default inject("ModalStore", "SerialStore")(observer(Home));
