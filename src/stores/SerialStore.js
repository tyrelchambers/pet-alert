import { decorate, observable, action } from "mobx";

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
      breed: "Husky"
    },
    {
      number: "HIOOIH4F333F884G77GF",
      pet: "Boobalah",
      breed: "Some Cat"
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