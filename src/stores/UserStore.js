import { decorate, observable, action } from "mobx";
import Axios from "axios";
import {toast} from 'react-toastify'
class UserStore {
  contacts = []
  currentUser = {}
  BACKEND = process.env.REACT_APP_BACKEND

  submitContact(data) {
    const token = window.localStorage.getItem("token")

    Axios.post(`${this.BACKEND}/api/contacts/new`, {
      ...data
    }, {
      headers: {
        token
      }
    }).then(res => this.contacts = [...this.contacts, res.data])
    .catch(err => toast.error(err.response.body))

    window.location.reload()
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
    const token = window.localStorage.getItem("token")

    Axios.post(`${this.BACKEND}/api/profile/me`, {
      ...data
    }, {
      headers: {
        token
      }
    }).then(res => console.log(res))
    .catch(err => toast.error(err.response.body))
    window.location.reload()
  }

  submitAccount = data => {
    
  }

  deleteContact = (id) => {
    const token = window.localStorage.getItem("token")

    Axios.delete(`${this.BACKEND}/api/contacts/${id}`, {
      headers: {
        token
      }
    }).then(res => toast.success("Contact deleted"))
    .catch(err => toast.error(err.response.body))

    window.location.reload()    
  }

  deleteAccount = () => {
    const token = window.localStorage.getItem("token")

    const prompt = window.confirm("Are you sure you want to delete everything?")

    if (prompt) {
      Axios.delete(`${this.BACKEND}/api/profile/me`, {
        headers: {
          token
        }
      }).then(res => {
        toast.success("Account Deleted, redirecting...")
  
        setTimeout(() => {
          window.location.pathname = "/"
        }, 5000);
      })
    }
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