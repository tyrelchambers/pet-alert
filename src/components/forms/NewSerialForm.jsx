import React, {useState} from 'react';
import { MainButton } from '../buttons/buttons';
import { inject, observer } from 'mobx-react';

const NewSerialForm = ({SerialStore}) => {
  const [ serial, setSerial ] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    SerialStore.addSerial(serial);
  }

  return (
    <form className="form form-white">
      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Serial Number</label>
        <input type="text" className="input" value={serial} placeholder="enter serial number" onChange={(e) => setSerial(e.target.value)}/>
      </div>

      <MainButton
        icon={<i className="fas fa-plus mr-4"></i>}
        text="Add serial number"
        onClick={e => submitHandler(e)}
      />
    </form>
  );
}

export default inject("SerialStore")(observer(NewSerialForm));
