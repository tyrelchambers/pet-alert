import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Index from './pages/Index/Index';
import Register from './pages/Register/Register';

ReactDOM.render(
  <React.StrictMode>
    <Router to="/">
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
