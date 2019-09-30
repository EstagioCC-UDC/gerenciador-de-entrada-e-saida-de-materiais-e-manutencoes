import React, { Component } from 'react';
import Container from '../../components/Container';

class FormExample extends Component {
  state = {
    loading: true,
  };

  render() {
    const { loading } = this.state;
    return <Container loading={loading} />;
  }
}

export default FormExample;
