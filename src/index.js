import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Index from './pages/Index/Index';
import Register from './pages/Register/Register';
import {Redirect} from 'react-router-dom'
import Home from './pages/Home/Home';
import UserStore from './stores/UserStore';
import ModalStore from './stores/ModalStore'
import SerialStore from './stores/SerialStore'
import { Provider } from 'mobx-react';
import ModalContainer from './components/ModalContainer/ModalContainer';
import SerialShow from './pages/SerialShow/SerialShow';
import Contacts from './pages/Contacts/Contacts';
import Search from './pages/Search/Search';
import Login from './pages/Login/Login';
import GeneralStore from './stores/GeneralStore'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile/Profile';

const stores = {
  UserStore,
  ModalStore,
  SerialStore,
  GeneralStore
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = window.localStorage.getItem('token');
  return (
    <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} />
        ) : (
          <React.Fragment>
            <Redirect
              to={{
                pathname: "/register",
                state: { from: props.location }
              }}
            />
          </React.Fragment>   
        )
      }
    />
  );
}

const InitialLoad = () => {
  React.useEffect(() => {
    stores.UserStore.getUser()
  }, [])

  return (
    <React.StrictMode>
      <Provider {...stores}>
        <ModalContainer />
        <ToastContainer />
        <Router to="/">
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/serial/:slug" component={SerialShow} />
            <Route exact path="/dashboard" component={Home}/>
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </Router>
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <InitialLoad/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
