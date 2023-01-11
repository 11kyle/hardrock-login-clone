import React from 'react'
import PropTypes from 'prop-types'

function Label({ children, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Label
