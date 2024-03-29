import React from 'react';
import { inject, observer } from 'mobx-react';
import './Serials.css'
import EditSerialForm from '../../components/forms/EditSerialForm';
import { Link } from 'react-router-dom';

const Serials = ({SerialStore, ModalStore}) => {
  const serials = SerialStore.serials.map((x,id) => (
    <div className="serial-item" key={id}>
      <Link className="text-xl" to={`/serial/${x.serialNumber}`}>{x.serialNumber}</Link>
      
      <div className="serial-actions flex flex-row align-center">
        <i className="fas fa-pencil-alt mr-4 edit" onClick={() => {
          ModalStore.setIsOpen(true)
          SerialStore.addSerial(x)
          ModalStore.setRender(<EditSerialForm data={x} />)
        }}></i>
        <i className="fas fa-trash delete" onClick={() => SerialStore.deleteSerial(x.uuid)}></i>
      </div>
    </div>
  ))

  if (SerialStore.serials.length === 0) {
    return (
      <section className="serial-wrapper mt-16">
        <p className="text-center">No serial numbers added</p>
      </section>
    );
  } else {
    return (
      <section className="serial-list mt-16">
        <h3 className="mb-4">Serial Numbers</h3>
        {serials}
      </section>
    )
  }
}

export default inject("SerialStore", "ModalStore")(observer(Serials));
