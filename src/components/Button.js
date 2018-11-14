import React from 'react'

const Button = ({ children, className, ...props }) => (
  <a {...props} className={`button ${className}`} target="_blank">
    {children.toUpperCase()}
  </a>
)

export default Button
