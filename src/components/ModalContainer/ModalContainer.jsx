import React from 'react';
import { inject, observer } from 'mobx-react';
import './ModalContainer.css'

const ModalContainer = ({ModalStore, SerialStore}) => {
  if (!ModalStore.isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="close-modal" onClick={() => {
        ModalStore.setIsOpen(false)
        SerialStore.resetState();
      }}>
        <i className="fas fa-times"></i>
      </div>
      <div className="modal-body">
        {ModalStore.render}
      </div>
    </div>
  );
}

export default inject("ModalStore", "SerialStore")(observer(ModalContainer));
