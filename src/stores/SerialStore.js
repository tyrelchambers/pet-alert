import { decorate, observable, action } from "mobx";
import Axios from "axios";

class SerialStore {
  BACKEND = process.env.REACT_APP_BACKEND

  serial = {
    number: "",
    pet: "",
    breed: ""
  }

  serials = [
  ]

  vaccine = {
    type: "",
    administered: "",
    expiry: ""
  }

  vaccines = [
  ]

  setSerials(serials) {
    this.serials = [...this.serials, serials];
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

  getSerials = () => {
    const token = window.localStorage.getItem("token")

    Axios.get(`${this.BACKEND}/api/serials`, {
      headers: {
        token
      }
    }).then(console.log)
  }

  submit = () => {
    const token = window.localStorage.getItem("token")

    Axios.post(`${this.BACKEND}/api/serials/new`, {
      ...this.serial
    }, {
      headers: {
        token
      }
    }).then(res => this.setSerials(res.data))

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