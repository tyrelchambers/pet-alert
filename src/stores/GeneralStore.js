import { decorate, observable, action } from "mobx";

class GeneralStore {
  navOpen = false;

  setNavOpen(bool) {
    this.navOpen = bool;
  }
}
decorate(GeneralStore, {
  navOpen: observable,
  setNavOpen: action
})

export default new GeneralStore()