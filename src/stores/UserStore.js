import { decorate, observable, action, computed } from "mobx";

class UserStore {
  contacts = []
  
  submitContact(data) {
    const payload = {
      ...data
    }

    console.log(payload)
  }
}

decorate(UserStore, {
  contacts: observable
})

export default new UserStore();