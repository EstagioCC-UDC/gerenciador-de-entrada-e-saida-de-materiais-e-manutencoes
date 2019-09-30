import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, label, type, placeholder, value, help, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        className="form-control"
        aria-describedby={`${id}Help`}
        onChange={onChange}
      />
      {help && (
        <small id={`${id}Help`} className="form-text text-muted">
          {help}
        </small>
      )}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  help: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  help: '',
};

export default Input;
