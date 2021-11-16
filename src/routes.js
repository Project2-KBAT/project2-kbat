/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from './components/Welcome/Welcome';
//  import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import error404 from './components/error404/error404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="*" component={error404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
