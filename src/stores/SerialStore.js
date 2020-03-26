import { decorate, observable, action, toJS } from "mobx";

class SerialStore {
  
  serial = {
    number: "",
    pet: "",
    breed: ""
  }

  serials = [
    {
      number: "HIOOIH4884G77GF",
      pet: "Stuffy",
      breed: "Husky",
    },
    {
      number: "HIOOIH4F333F884G77GF",
      pet: "Boobalah",
      breed: "Some Cat"
    }
  ]

  vaccine = {
    type: "",
    administered: "",
    expiry: ""
  }

  vaccines = [
  ]

  setSerials(serials) {
    this.serials = [...serials];
  }

  updateSerial(key, data) {
    this.serial[key] = data;
  }

  addSerial(data) {
    this.serial = {...data};
  }

  setVaccines(data) {
    this.vaccines = [...this.vaccines, data]
  }

  updateVaccine(id, data) {
    const prev = {...this.vaccines[id], ...data}
    this.vaccines[id] = prev;    
  }

  insertNewVaccine() {
    this.vaccines = [...this.vaccines, this.vaccine]
  }

  resetState() { 
    this.vaccines = [];
    this.serial = {}
  }

  submit() {
    const payload = {
      ...this.serial,
      ...this.vaccines
    }

    this.resetState()
  }

}

decorate(SerialStore, {
  serial: observable,
  serials: observable,
  setSerials: action,
  addSerial: action,
  updateSerial: action,
  vaccines: observable,
  setVaccines: action,
  updateVaccine: action,
  resetState: action
})

export default new SerialStore();