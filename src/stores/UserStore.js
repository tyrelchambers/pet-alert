import { decorate, observable, action } from "mobx";

class UserStore {
  contacts = []
  
  submitContact(data) {
    const payload = {
      ...data
    }

    this.contacts = [{...data}]
  }
}

decorate(UserStore, {
  contacts: observable,
  submitContact: action
})

export default new UserStore();