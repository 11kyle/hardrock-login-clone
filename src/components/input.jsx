import React from 'react'
import PropTypes from 'prop-types'

function Input({ id, type, name, value, onChange, placeholder, className, required }) {
  return (
    <input 
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required={required}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
}

Input.defaultProps = {
  placeholder: '',
  required: false,
}

export default Input
