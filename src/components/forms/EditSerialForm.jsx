import React from 'react';
import { MainButton } from '../buttons/buttons';
import AddressForm from './AddressForm';
import ExistingAddress from '../ExistingAddress/ExistingAddress';
import { inject, observer } from 'mobx-react';

const EditSerialForm = ({data, UserStore, SerialStore}) => {
  return (
    <form className="form form-white">
      <div className="field-group">
        <label htmlFor="serial" className="label">Serial Number</label>
        <input type="text" className="input" name="serial" value={data.number} onChange={e => SerialStore.updateSerial("number", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Pet Name</label>
        <input type="text" className="input" name="pet" placeholder="enter serial number" value={data.pet} onChange={e => SerialStore.updateSerial("pet", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Breed</label>
        <input type="text" className="input" value={data.breed} placeholder="breed of your pet" name="breed" onChange={(e) => SerialStore.updateSerial("number", e.target.value)}/>
      </div>

      <hr/>
      <AddressForm />
      <hr/>
      <h3 className="title-sm mb-1">Use an existing address</h3>
      <ExistingAddress
        data={UserStore.address}
      />

      <div className="mt-4">
        <MainButton
          icon={<i className="fas fa-arrow-alt-circle-right mr-4"></i>}
          text="Update serial number"
        />
      </div>
    </form>
  );
}

export default inject("UserStore", "SerialStore")(observer(EditSerialForm));
