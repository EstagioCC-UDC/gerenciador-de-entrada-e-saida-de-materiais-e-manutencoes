import React from 'react';
import PropTypes from 'prop-types';

import { StyledCheckbox } from './styles';

const Checkbox = props => {
  const { id, label, onChange, checked } = props;
  return (
    <StyledCheckbox className="form-check">
      <input
        onChange={onChange}
        checked={checked}
        type="checkbox"
        className="form-check-input"
        id={id}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </StyledCheckbox>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
