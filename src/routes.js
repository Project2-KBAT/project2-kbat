import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import 404 from '././components/404/404';


const Routes = () => (
  <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="*" component={404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;