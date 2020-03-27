import React from 'react';
import {useParams} from 'react-router-dom'
import Display from '../../layouts/Display/Display';
import PetProfile from '../../layouts/PetProfile/PetProfile';
import Map from '../../components/Map/Map';
import { inject, observer } from 'mobx-react';

const SerialShow = ({UserStore, SerialStore}) => {
  let {slug} = useParams();
  const address = UserStore.savedAddresses.filter(x => x.serialNumber === slug)[0]
  const contacts = UserStore.contactInfo.map((x, id) => 
    <div className="contacts-wrapper bg m-2" key={id}>
      <p className="title-sm accent-primary">{x.firstName} {x.lastName}</p>
      <p>{x.phoneNumber}</p>
    </div>
  )

  const vaccines = SerialStore.serials[0].vaccines.map((x, id) =>
    <div className="vaccine m-2">
      <h3 className="text-3xl accent-primary">{x.date}</h3>
      <p>{x.vaccination}</p>
    </div>
  )

  return (
    <Display>
      <div className="bg">
        <h1 className="title-lg">Serial Number: {slug}</h1>
      </div>
      <div className="mt-16">
        <PetProfile />
      </div>

      <div className="mt-16">
        <h3 className="title-md mb-4">Nearest Veterinary Office</h3>
        <Map/>
      </div>

      <div className="mt-16">
        <h3 className="title-md">Contact Information</h3>
        <div className="flex flex-row">
          {contacts}
        </div>
        <h3 className="title-md mt-8">Home Address</h3>
        <div className="address-wrapper" >
          <h3 className="address-street">{address.street}</h3>
          <div className="flex flex-row align-center address-details">
            {address.city}, {address.provinceState}, {address.country} {address.zipPostalCode}
          </div>
        </div>

        <h3 className="title-md mt-8">Vaccinations</h3>
        <div className="flex flex-row items-center">
          {vaccines}
        </div>
      </div>
    </Display>
  );
}

export default inject("SerialStore", "UserStore")(observer(SerialShow));
