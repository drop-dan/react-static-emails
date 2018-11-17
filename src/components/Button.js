import React from 'react'
import { Link } from './'

const Button = ({ children, className, ...props }) => (
  <Link {...props} className={`button ${className}`}>
    {children.toUpperCase()}
  </Link>
)

export default Button
