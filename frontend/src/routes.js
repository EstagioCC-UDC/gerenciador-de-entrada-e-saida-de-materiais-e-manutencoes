import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import FormExample from './pages/FormExample';

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route>
        <Layout>
          <Route path="/" exact component={Home} />
          <Route path="/form-example" component={FormExample} />
        </Layout>
      </Route>
    </Switch>
  );
}
