import { decorate, observable, action, computed } from "mobx";

class UserStore {
  address = {
    street: "",
    city: "",
    provinceState: "",
    country: "",
    zipPostalCode: ""
  }

  contactInfo = [
    {
      firstName: "John",
      lastName: "Smith",
      phoneNumber: "555-5555"
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      phoneNumber: "555-5555"
    }
  ]

  savedAddresses = [
    {
      street: "568 Wolfe St.",
      city: "Peterborough",
      provinceState: "Ontario",
      country: "Canada",
      zipPostalCode: "K9J 2L8"
    },
    {
      street: "10003 Wolfe St.",
      city: "Peterborough",
      provinceState: "Ontario",
      country: "Canada",
      zipPostalCode: "K9J 2L8",
      serialNumber: "HIOOIH4884G77GF"
    }
  ]

  updateAddress(key, data) {
    this.address[key] = data
  }

  addAddress(data) {
    this.address = {...data};
  }

  addAddresses(data) {
    this.savedAddresses = [...data]
  }
}

decorate(UserStore, {
  address: observable,
  savedAddresses: observable,
  updateAddress: action,
  addAddresses: action,
  addAddress: action,
  contactInfo: observable
})

export default new UserStore();