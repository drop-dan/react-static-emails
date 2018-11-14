import React from 'react'
import image from '../hero.png'

export { default as Button } from './Button'
export { default as Header } from './Header'
export { default as Footer } from './Footer'
export { default as Item } from './Item'
export { default as LogoBar } from './LogoBar'

export const Heading = ({ children }) => <h1>{children}</h1>

export const Body = ({ children }) => <p>{children}</p>

export const HeroImage = () => (
  <img
    className="hero-image"
    src={image}
    width="500"
    height="400"
    border="0"
    alt="Insert alt text here"
  />
)
