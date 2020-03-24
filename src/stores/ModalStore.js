import { decorate, observable, action } from "mobx";

class ModalStore {
  isOpen = false
  render = ""

  setIsOpen(bool) {
    this.isOpen = bool;
  }

  setRender(data) {
    this.render = data
  }
  
}

decorate(ModalStore, {
  isOpen: observable,
  setIsOpen: action,
  render: observable,
  setRender: action
})

export default new ModalStore();