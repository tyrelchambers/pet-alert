import React from 'react';
import Display from '../../layouts/Display/Display';
import DashboardDisplay from '../../layouts/DashboardDisplay/DashboardDisplay';
import { inject, observer } from 'mobx-react';
import { MainButton } from '../../components/buttons/buttons';
import EditProfileForm from '../../components/forms/EditProfileForm';

const Profile = ({UserStore, ModalStore}) => {
  return (
    <Display>
      <DashboardDisplay>
        <div className="flex flex-row justify-between page-header">
          <h1 className="title-lg">Profile Settings</h1>
            <div className="max-w-sm">
              <MainButton
                icon={<i className="fas fa-plus mr-4"></i>}
                text="Edit profile"
                onClick={() => {
                  ModalStore.setIsOpen(true)
                  ModalStore.setRender(<EditProfileForm />)
                }}
              />
            </div>  
          </div>
      </DashboardDisplay>
    </Display>
  );
}

export default inject("UserStore", "ModalStore")(observer(Profile));
