import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route>
        <Header />
        <Home />
      </Route>
    </Switch>
  );
}
