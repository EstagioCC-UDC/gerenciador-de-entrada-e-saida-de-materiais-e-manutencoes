import React, { Component } from 'react';
import Container from '../../components/Container';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Checkbox from '../../components/Checkbox';

class FormExample extends Component {
  state = {
    loading: true,
    exemplo1: '',
    exemplo2: '',
    checked: false,
  };

  render() {
    const { loading, exemplo1, exemplo2, checked } = this.state;
    return (
      <Container loading={loading} title="Exemplo de formulário">
        <Form>
          <Input
            id="exemplo1"
            label="Exemplo"
            placeholder="Exemplo"
            type="text"
            value={exemplo1}
            help="Exemplo de texto"
            onChange={e => {
              this.setState({ exemplo1: e.target.value });
            }}
          />
          <Input
            id="exemplo2"
            label="Exemplo"
            placeholder="Exemplo"
            type="text"
            value={exemplo2}
            help="Exemplo de texto"
            onChange={e => {
              this.setState({ exemplo2: e.target.value });
            }}
          />
          <Checkbox
            id="exemploCheckbox"
            checked={checked}
            label="Exemplo de checkbox"
            onChange={() => this.setState({ checked: !checked })}
          />
        </Form>
      </Container>
    );
  }
}

export default FormExample;
