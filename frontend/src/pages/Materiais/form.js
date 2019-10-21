import React, { Component } from 'react';
import Form from '../../components/Form';
import Container from '../../components/Container';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

class FormMateriais extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      loading: false,
      nome: '',
      descricao: '',
      limiarEstoque: '',
    };
  }

  handleChangeNome = evt => {
    this.setState({ nome: evt.target.value });
  };

  handleChangeDescricao = evt => {
    this.setState({ descricao: evt.target.value });
  };

  handleChangeLimiarEstoque = evt => {
    this.setState({ limiarEstoque: evt.target.value });
  };

  handleCancel = evt => {
    this.setState({ loading: true });
    // cancel action here
    this.setState({ loading: false });
  };

  handleDelete = evt => {
    this.setState({ loading: true });
    // delete action here
    this.setState({ loading: false });
  };

  handleSave = evt => {
    this.setState({ loading: true });
    // save action here
    this.setState({ loading: false });
  };

  render() {
    const { loading, id, nome, descricao, limiarEstoque } = this.state;
    return (
      <Container title={`${id ? 'Alterar' : 'Cadastrar'} material`}>
        <Form
          loading={loading}
          onCancel={this.handleCancel}
          onDelete={this.handleDelete}
          onSave={this.handleSave}
        >
          {id && (
            <Input label="ID" value={id} disabled={true} id="id" type="text" />
          )}
          <Input
            id="nome"
            label="Nome"
            type="text"
            value={nome}
            onChange={this.handleChangeNome}
          />
          <TextArea
            id="descricao"
            label="Descrição"
            value={descricao}
            onChange={this.handleChangeDescricao}
          />
          <Input
            id="limiar-estoque"
            label="Limiar de estoque"
            type="number"
            min={0}
            value={limiarEstoque}
            onChange={this.handleChangeLimiarEstoque}
          />
        </Form>
      </Container>
    );
  }
}

export default FormMateriais;
