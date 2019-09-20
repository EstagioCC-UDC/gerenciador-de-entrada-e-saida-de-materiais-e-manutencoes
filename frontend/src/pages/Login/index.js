import React, { Component } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import logo from '../../assets/images/pf-logo.png';
import Button from '../../components/Button';
import { Container } from './styles';

import { login } from './business';
import { setUserInfo, setTokens } from '../../services/userInfo';

class Login extends Component {
  state = {
    loading: false,
    username: '',
    password: '',
  };

  handleLogin = async e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.setState({ loading: true });
    try {
      const response = await login(username, password);
      // eslint-disable-next-line camelcase
      const { userInfo, refresh_token, access_token } = response.data;

      setUserInfo(userInfo);
      setTokens(access_token, refresh_token);
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
          <form>
            <div>
              <FaUser />
              <input
                name="username"
                id="usernameInput"
                onChange={this.handleUsernameChange}
                value={username}
                type="text"
                placeholder="Usuário"
              />
            </div>

            <div>
              <FaLock />
              <input
                name="password"
                id="passwordInput"
                onChange={this.handlePasswordChange}
                value={password}
                type="password"
                placeholder="Senha"
                autoComplete="new-password"
              />
            </div>

            <Button
              type="primary"
              loading={loading}
              onClick={this.handleLogin}
              text="Entrar"
            />
          </form>
        </div>
      </Container>
    );
  }
}

export default Login;
