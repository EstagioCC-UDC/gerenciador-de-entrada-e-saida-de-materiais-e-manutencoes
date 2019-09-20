import React, { Component } from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import history from './services/history';
import { getUserInfo } from './services/userInfo';
import Routes from './routes';

class App extends Component {
  componentDidMount() {
    const userInfo = getUserInfo();
    if (!userInfo && history.location.pathname !== '/login') {
      history.push('/login');
    }
  }

  render() {
    return (
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    );
  }
}

export default App;
