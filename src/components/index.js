import React from 'react'
import { LogoBar } from './'

export { default as Main } from './Main'
export { default as Footer } from './Footer'
export { default as Item, OfferBlurb } from './Item'
export { default as LogoBar } from './LogoBar'

export const Header = () => <LogoBar />

export const Link = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)

export const Button = ({
  children, className, style, ...props
}) => (
  <div className={`button ${className}`} style={style}>
    <Link {...props}>{children.toUpperCase()}</Link>
  </div>
)

export const HeroImage = ({
  width = '600', height = '600', image, alt,
}) => (
  <img className="hero-image" src={image} width={width} height={height} border="0" alt={alt} />
)
