import React from 'react';
import { MainButton, SecButton } from '../buttons/buttons';
import { inject, observer } from 'mobx-react';


const NewSerialForm = ({SerialStore, ModalStore}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    SerialStore.submit()
    ModalStore.setIsOpen(false)
  }


  const insertVaccine = (e) => {
    e.preventDefault();
    SerialStore.insertNewVaccine();
  }
  return (
    <form className="form form-white center">
      <h3 className="text-xl mb-2">Pet Information</h3>

      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Serial Number</label>
        <input type="text" className="input" value={SerialStore.serial.number} placeholder="enter serial number" name="number" onChange={(e) => SerialStore.updateSerial("number", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Pet Name</label>
        <input type="text" className="input" value={SerialStore.serial.pet} placeholder="your pet's name" name="pet" onChange={(e) => SerialStore.updateSerial("pet", e.target.value)}/>
      </div>

      <div className="field-group">
        <label htmlFor="serialNumber" className="label">Breed</label>
        <input type="text" className="input" value={SerialStore.serial.breed} placeholder="breed of your pet" name="breed" onChange={(e) => SerialStore.updateSerial("breed", e.target.value)}/>
      </div>

      <div className="field-group" id="vaccineWrapper">
        <label htmlFor="serialNumber" className="label">Vaccines</label>
        {SerialStore.vaccines.map((x, id) => <DefaultVaccine key={id} id={id} SerialStore={SerialStore}/>)}
        
      </div>
      <div className="mt-4">
        <SecButton
          icon={<i className="fas fa-plus mr-4"></i>}
          text="New Vaccine"
          onClick={e => insertVaccine(e)}
        />
      </div>
      <hr/>

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


const DefaultVaccine = ({id, SerialStore}) => (
  <div className="flex flex-row mt-1 mb-1 has-remove">
    <button className="remove-vaccine" onClick={(e) => {
      e.preventDefault();
      SerialStore.vaccines.splice(id, 1)
    }}>
      <i className="fas fa-minus-circle"></i>
    </button>
    <input 
      type="text" 
      className="input flex-1"
      placeholder={`vaccination ${id + 1}`} 
      onChange={(e) => SerialStore.updateVaccine(id, {type: e.target.value})}
      value={SerialStore.vaccines[id].type}
      name="vaccination"
    />
    <input 
      type="date" 
      className="date-picker" 
      name="administered" 
      onChange={(e) => SerialStore.updateVaccine(id, {administered: e.target.value})}
      value={SerialStore.vaccines[id].administered}
    />
    <input 
      type="date" 
      className="date-picker" 
      name="expiry" 
      onChange={(e) => SerialStore.updateVaccine(id, {expiry: e.target.value})}
      value={SerialStore.vaccines[id].expiry}

    />
  </div>
)

export default inject("SerialStore", "ModalStore", "UserStore")(observer(NewSerialForm));
