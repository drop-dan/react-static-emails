import React from 'react'
import { Button } from './'
import image from '../logo.png'

const LogoBar = () => (
  <div className="logo-bar border-top">
    <div>
      <a href="http://litmus.com" target="_blank">
        <img className="logo" alt="Logo" src={image} width="60" height="60" border="0" />
      </a>
    </div>
    <div className="flex-end">
      <Button href="http://litmus.com">OPEN DROP</Button>
    </div>
  </div>
)

export default LogoBar
