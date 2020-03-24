import { decorate, observable, action } from "mobx";

class SerialStore {
  
  serial = {
    number: "",
    pet: ""
  }

  serials = [
    {
      number: "HIOOIH4884G77GF",
      pet: "Stuffy"
    },
    {
      number: "HIOOIH4F333F884G77GF",
      pet: "Boobalah"
    }
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

}

decorate(SerialStore, {
  serial: observable,
  serials: observable,
  setSerials: action,
  addSerial: action,
  updateSerial: action
})

export default new SerialStore();