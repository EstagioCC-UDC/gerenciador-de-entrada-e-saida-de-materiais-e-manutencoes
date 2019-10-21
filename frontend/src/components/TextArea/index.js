import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  id,
  rows,
  value,
  onChange,
  label,
  placeholder,
  disabled,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        className="form-control"
        id={id}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

TextArea.defaultProps = {
  rows: 3,
  placeholder: '',
  disabled: false,
};

export default TextArea;
