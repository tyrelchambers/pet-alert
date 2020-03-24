import React from 'react';
import { inject, observer } from 'mobx-react';
import './ModalContainer.css'

const ModalContainer = ({ModalStore}) => {
  if (!ModalStore.isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="close-modal" onClick={() => {
        ModalStore.setIsOpen(false)
      }}>
        <i className="fas fa-times"></i>
      </div>
      <div className="modal-body">
        {ModalStore.render}
      </div>
    </div>
  );
}

export default inject("ModalStore")(observer(ModalContainer));
