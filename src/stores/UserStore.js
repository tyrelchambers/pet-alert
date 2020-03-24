import { decorate, observable, action } from "mobx";

class UserStore {
  address = {
    street: "",
    city: "",
    provinceState: "",
    country: "",
    zipPostalCode: ""
  }

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
      zipPostalCode: "K9J 2L8"
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
  addAddress: action
})

export default new UserStore();