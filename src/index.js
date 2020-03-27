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

const stores = {
  UserStore,
  ModalStore,
  SerialStore
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

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <ModalContainer />
      <Router to="/">
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/serial/:slug" component={SerialShow} />
          <Route exact path="/dashboard" component={Home}/>
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
