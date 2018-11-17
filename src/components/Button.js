import React from 'react'
import { Link } from './'

const Button = ({
  children, className, style, ...props
}) => (
  <div className={`button ${className}`} style={style}>
    <Link {...props}>{children.toUpperCase()}</Link>
  </div>
)

export default Button
