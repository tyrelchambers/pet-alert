import React from 'react';
import Display from '../../layouts/Display/Display';
import DashboardDisplay from '../../layouts/DashboardDisplay/DashboardDisplay';
import { inject, observer } from 'mobx-react';
import EditProfileForm from '../../components/forms/EditProfileForm';
import { SecButton } from '../../components/buttons/buttons';

const Profile = ({UserStore}) => {
  return (
    <Display>
      <DashboardDisplay>
        <h1 className="title-lg">Profile Settings</h1> 

        <EditProfileForm />
        <hr/>
        <div className="form">
        <h2 className="title-md">Danger Zone</h2>
        <p className="mb-4">Actions performed here are permanent</p>
        <SecButton
          icon={<i className="fas fa-user-times mr-2"></i>}
          text="Delete account"
          classes="danger"
          onClick={UserStore.deleteAccount}
        />
        </div>
      </DashboardDisplay>
    </Display>
  );
}

export default inject("UserStore")(observer(Profile));
