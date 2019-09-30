import React from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from './styles';

const Form = props => {
  const { children } = props;
  return (
    <StyledForm onSubmit={e => e.preventDefault()}>
      {React.Children.map(children, child => child)}
    </StyledForm>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Form.defaultProps = {
  children: [],
};

export default Form;
