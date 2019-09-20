import React, { Component } from 'react';

import logo from '../../assets/images/pf-logo.png';

import Button from '../../components/Button';
import { Container } from './styles';

import { login } from './business';

class Login extends Component {
  state = {
    loading: false,
    username: '',
    password: '',
  };

  handleLogin = async () => {
    const { username, password } = this.state;
    this.setState({ loading: true });
    try {
      const userInfo = await login(username, password);
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }

    this.setState({ loading: false });
  };

  handleUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    const { loading, username, password } = this.state;

    return (
      <Container>
        <div>
          <h2>
            GESMM - Gerenciador de Entrada e Saída de Materiais e Manutenções
          </h2>
          <img src={logo} alt="Logo" />
          <input
            onChange={this.handleUsernameChange}
            value={username}
            type="text"
            placeholder="Usuário"
            autoComplete="off"
          />
          <input
            onChange={this.handlePasswordChange}
            value={password}
            type="password"
            placeholder="Senha"
            autoComplete="new-password"
          />
          <Button
            type="primary"
            loading={loading}
            onClick={this.handleLogin}
            text="Entrar"
          />
        </div>
      </Container>
    );
  }
}

export default Login;
