import { decorate, observable, action } from "mobx";

class SerialStore {
  serials = ["HIOOIH4884G77GF","HIOOIH4884G77GF","HIOOIH4884G77GF"]

  setSerials(serials) {
    this.serials = [...serials];
  }

  addSerial(serials) {
    this.serials = [...this.serials, serials];
  }
}

decorate(SerialStore, {
  serials: observable,
  setSerials: action,
  addSerial: action
})

export default new SerialStore();