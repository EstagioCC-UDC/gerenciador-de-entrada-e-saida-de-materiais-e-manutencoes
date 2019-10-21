import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { StyledForm, LoadingContainer } from './styles';

import FormButton from '../FormButton';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: props.loading,
    };
  }

  state = {
    loading: false,
  };

  handleCancel = async () => {
    const { onCancel } = this.props;
    this.setState({ loading: true });
    await onCancel();
    this.setState({ loading: false });
  };

  handleDelete = async () => {
    const { onDelete } = this.props;
    this.setState({ loading: true });
    await onDelete();
    this.setState({ loading: false });
  };

  handleSave = async () => {
    const { onSave } = this.props;
    this.setState({ loading: true });
    await onSave();
    this.setState({ loading: false });
  };

  render() {
    const { children, onSave, onDelete, onCancel } = this.props;
    const { loading } = this.state;
    return (
      <StyledForm onSubmit={e => e.preventDefault()}>
        <LoadingContainer loading={loading ? 1 : 0}>
          <FaSpinner />
        </LoadingContainer>
        {React.Children.map(children, child => child)}
        <div>
          {onCancel && (
            <FormButton
              text="Cancelar"
              type="secondary"
              onClick={this.handleCancel}
            />
          )}
          {onDelete && (
            <FormButton
              text="Remover"
              type="delete"
              onClick={this.handleDelete}
            />
          )}
          {onSave && <FormButton text="Salvar" onClick={this.handleSave} />}
        </div>
      </StyledForm>
    );
  }
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
};

Form.defaultProps = {
  children: [],
  onSave: null,
  onDelete: null,
  onCancel: null,
};

export default Form;
