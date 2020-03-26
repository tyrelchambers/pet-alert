import { decorate, observable, action, computed } from "mobx";

class UserStore {
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
  
}

decorate(UserStore, {
  contactInfo: observable
})

export default new UserStore();