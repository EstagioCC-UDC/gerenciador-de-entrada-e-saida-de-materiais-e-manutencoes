import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { StyledButton } from './styles';

const typeColorMap = {
  primary: '#100F0F',
  secondary: '#999',
  cancel: '#F75F3F',
};

export default function Button({ onClick, text, loading, type }) {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      backgroundColor={typeColorMap[type]}
      loading={loading ? 1 : 0}
    >
      {loading ? <FaSpinner /> : text}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  type: 'primary',
};
