import React from 'react'
import { LogoBar, Heading, Body } from './'

const Footer = () => (
  <div>
    <LogoBar />

    <Heading>Let's sweeten your life.</Heading>

    <Body>© Copyright Drop Technologies Inc. 123 Street St., Canada, 1A2 3B4</Body>
    <a
      href="http://litmus.com"
      target="_blank"
      style={{ color: '#666666', textDecoration: 'none' }}
    >
      1234 Main Street, Anywhere, MA 01234, USA
    </a>

    <br />
    <a
      href="http://litmus.com"
      target="_blank"
      style={{ color: '#666666', textDecoration: 'none' }}
    >
      Unsubscribe
    </a>
    <br />
    <a
      href="http://litmus.com"
      target="_blank"
      style={{ color: '#666666', textDecoration: 'none' }}
    >
      View this email in your browser
    </a>
  </div>
)

export default Footer
