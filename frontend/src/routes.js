import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './components/Layout';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route>
        <Layout />
        <Home />
      </Route>
    </Switch>
  );
}
