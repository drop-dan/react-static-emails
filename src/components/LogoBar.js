import React from 'react'
import { Button } from './'
import image from '../logo.png'

const LogoBar = () => (
  <div className="logo-bar">
    <div>
      <a href="http://litmus.com" target="_blank">
        <img className="logo" alt="Logo" src={image} width="60" height="60" border="0" />
      </a>
    </div>
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button href="http://litmus.com">OPEN DROP</Button>
    </div>
  </div>
)

export default LogoBar
