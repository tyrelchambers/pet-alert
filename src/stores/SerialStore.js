import { decorate, observable, action } from "mobx";
import Axios from "axios";
import { toast } from "react-toastify";

class SerialStore {
  BACKEND = process.env.REACT_APP_BACKEND

  serial = {
    serialNumber: "",
    petName: "",
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
    }).then(res => this.serials = [...res.data])
  }

  submit = async () => {
    const token = window.localStorage.getItem("token")

    const serial = await Axios.post(`${this.BACKEND}/api/serials/new`, {
      ...this.serial
    }, {
      headers: {
        token
      }
    }).then(res => {
      this.setSerials(res.data)
      return res.data
    })

    this.submitVaccines(serial.uuid)

    this.resetState()
  }

  edit = async (serial) => {
    const token = window.localStorage.getItem("token")
    return await Axios.put(`${this.BACKEND}/api/serials/edit`, {
      ...serial
    }, {
      headers: {
        token
      }
    }).then(res => {
      return res.data
    }).catch(console.log)
  }

  editVaccines = async (serialId, vaccines) => {
    const token = window.localStorage.getItem("token")

    await Axios.put(`${this.BACKEND}/api/vaccines/edit`, {
      vaccines,
      serialId
    }, {
      headers: {
        token
      }
    })
  }
  
  submitVaccines = (serialId) => {
    const token = window.localStorage.getItem("token")

    Axios.post(`${this.BACKEND}/api/vaccines/new`, {
      vaccines: this.vaccines,
      serialId
    }, {
      headers: {
        token
      }
    }).then(res => toast.success("Vaccines saved"))
  }

  deleteSerial =(id)=> {
    const token = window.localStorage.getItem("token")

    Axios.delete(`${this.BACKEND}/api/serials/${id}`, {
      headers: {
        token
      }
    }).then(res => window.location.reload())
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