import React from 'react'

export { default as Button } from './Button'
export { default as Header } from './Header'
export { default as Footer } from './Footer'
export { default as Item, OfferBlurb } from './Item'
export { default as LogoBar } from './LogoBar'

export const HeroImage = ({ image, alt }) => (
  <img className="hero-image" src={image} width="500" height="400" border="0" alt={alt} />
)

export const Link = ({ href, children, ...props }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
)
