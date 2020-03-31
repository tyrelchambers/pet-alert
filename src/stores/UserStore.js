import { decorate, observable, action } from "mobx";
import Axios from "axios";
import {toast} from 'react-toastify'
class UserStore {
  contacts = []
  currentUser = {}
  BACKEND = process.env.REACT_APP_BACKEND

  submitContact(data) {
    const payload = {
      ...data
    }

    this.contacts = [{...data}]
  }

  register = async (data) => {
    Axios.post(`${this.BACKEND}/api/auth/register`, {
      ...data
    })
    .then(res => {
      window.localStorage.setItem("token", res.data.token)
      this.setCurrentUser(res.data.user)
      window.location.pathname = '/dashboard'
    })
    .catch(err => toast.error(err.response.body))
  }

  login = async (data) => {
    Axios.get(`${this.BACKEND}/api/auth/login`, {
      params: {
        ...data
      }
    })
    .then(res => {
      window.localStorage.setItem("token", res.data.token)
      this.setCurrentUser(res.data.user)
      window.location.pathname = '/dashboard'
    })
    .catch(err => toast.error(err.response.body))
  }

  getUser = () => {
    const token = window.localStorage.getItem("token")

    Axios.get(`${this.BACKEND}/api/profile/me`, {
      headers: {
        token
      }
    }).then(res => this.setCurrentUser(res.data))
    .catch(err => console.log(err))
  }

  submitBasic = (data) => {
  }

  submitAccount = data => {
    
  }

  setCurrentUser(user) {
    this.currentUser = user;
  }
}

decorate(UserStore, {
  contacts: observable,
  submitContact: action,
  currentUser: observable,
  setCurrentUser: action
})

export default new UserStore();