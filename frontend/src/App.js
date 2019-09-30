import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';
import './styles/global.css';

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
        <ToastContainer autoClose={3000} />
      </Router>
    );
  }
}

export default App;
