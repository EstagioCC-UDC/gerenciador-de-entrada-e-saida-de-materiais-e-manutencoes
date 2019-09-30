import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { StyledButton } from './styles';

const typeClassMap = {
  primary: 'btn-success',
  secondary: 'btn-secondary',
  delete: 'btn-danger',
};

/**
 * @param {{onClick: Function,
 * text: String,
 * loading: Boolean,
 * type: 'primary' | 'secondary' | 'delete'}} props
 */
export default function FormButton({ onClick, text, loading, type }) {
  return (
    <StyledButton
      onClick={onClick}
      className={`${typeClassMap[type]} ripple`}
      loading={loading ? 1 : 0}
    >
      {loading ? <FaSpinner /> : text}
    </StyledButton>
  );
}

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
};

FormButton.defaultProps = {
  loading: false,
  type: 'primary',
};
