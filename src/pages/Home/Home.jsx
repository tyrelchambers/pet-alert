import React from 'react';
import { MainButton } from '../../components/buttons/buttons';
import { inject, observer } from 'mobx-react';
import NewSerialForm from '../../components/forms/NewSerialForm';
import Display from '../../layouts/Display/Display';
import Serials from '../../layouts/Serials/Serials';
import DashboardDisplay from '../../layouts/DashboardDisplay/DashboardDisplay';
import './Home.css'

const Home = ({ModalStore, UserStore, SerialStore}) => {
  React.useEffect(() => {
    const fn = async () => {
      await SerialStore.getSerials();
    }

    fn()
  }, [])

  return (
    <Display>
      <DashboardDisplay>
        <div className="flex flex-row justify-between page-header">
        <h1 className="title-lg">Good day, {UserStore.currentUser.firstName || UserStore.currentUser.email}!</h1>
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
      </DashboardDisplay>
    </Display>
  );
}

export default inject("ModalStore", "UserStore", "SerialStore")(observer(Home));
