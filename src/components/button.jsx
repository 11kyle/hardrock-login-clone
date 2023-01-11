import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, onClick, type, disabled, className }) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  disabled: false,
}

export default Button
