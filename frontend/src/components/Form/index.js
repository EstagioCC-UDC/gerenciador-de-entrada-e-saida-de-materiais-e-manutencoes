import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './styles';

import FormButton from '../FormButton';

const Form = ({ children, onSave, onDelete, onCancel }) => {
  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
      {React.Children.map(children, child => child)}
      <div>
        {onCancel && (
          <FormButton text="Cancelar" type="secondary" onClick={onCancel} />
        )}
        {onDelete && (
          <FormButton text="Remover" type="delete" onClick={onDelete} />
        )}
        {onSave && <FormButton text="Salvar" onClick={onSave} />}
      </div>
    </StyledForm>
  );
};

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
