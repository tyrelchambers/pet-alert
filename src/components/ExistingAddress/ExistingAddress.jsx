import React from 'react';
import './ExistingAddress.css'
import { inject, observer } from 'mobx-react';

const ExistingAddress = ({UserStore}) => {
  if(UserStore.savedAddresses.length === 0 ) {
    return (
      <div className="bg">
        <p className="text-center">No saved addresses</p>
      </div>
    )
  };

  return UserStore.savedAddresses.map((x,id) => (
    <div className="address-wrapper" key={id} onClick={() => UserStore.addAddress(x)}>
      <h3 className="address-street">{x.street}</h3>
      <div className="flex flex-row align-center address-details">
        {x.city}, {x.provinceState}, {x.country} {x.zipPostalCode}
      </div>
    </div>
  ))

}

export default inject("UserStore")(observer(ExistingAddress));
