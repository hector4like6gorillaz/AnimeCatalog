import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import { BrowserRouter as Router, Switch, Route, Redirect,useParams } from "react-router-dom";

import './index.css';
import Init from './components/Views/Init/Inicio';
import Selected from './components/Views/selected/Selected';




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
      <Route  path="/home"><Init/></Route>
      <Route  path="/list/:id"><Selected/></Route>
      
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);


