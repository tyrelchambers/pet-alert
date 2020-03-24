import React, {useState} from 'react';
import { MainButton } from '../buttons/buttons';
import { inject, observer } from 'mobx-react';
import AddressForm from './AddressForm';
import ExistingAddress from '../ExistingAddress/ExistingAddress';

const NewSerialForm = ({SerialStore, ModalStore, UserStore}) => {
  const [ serial, setSerial ] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    SerialStore.addSerial(serial);
    ModalStore.setIsOpen(false)
  }

  return (
    <form className="form form-white">
      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Serial Number</label>
        <input type="text" className="input" value={serial} placeholder="enter serial number" onChange={(e) => setSerial(e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Pet Name</label>
        <input type="text" className="input" value={serial} placeholder="enter serial number" onChange={(e) => setSerial(e.target.value)}/>
      </div>

      <hr/>
      <AddressForm />
      <hr/>
      <h3 className="title-sm mb-1">Use an existing address</h3>
      <ExistingAddress />

      <div className="mt-4">
        <MainButton
          icon={<i className="fas fa-arrow-alt-circle-right mr-4"></i>}
          text="Save serial number"
          onClick={e => submitHandler(e)}
        />
      </div>
    </form>
  );
}

export default inject("SerialStore", "ModalStore", "UserStore")(observer(NewSerialForm));
