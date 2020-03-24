import React from 'react';
import { MainButton } from '../buttons/buttons';

const EditSerialForm = ({data}) => {
  return (
    <form className="form form-white">
      <div className="field-group">
        <label htmlFor="serial" className="label">Serial Number</label>
        <input type="text" className="input" value={data.serialNumber}/>
      </div>

      <MainButton
        icon={<i className="fas fa-arrow-alt-circle-right mr-4"></i>}
        text="Save changes"
      />
    </form>
  );
}

export default EditSerialForm;
