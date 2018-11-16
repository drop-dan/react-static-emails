import React from 'react'
import { LogoBar } from './'

const Footer = () => (
  <div>
    <LogoBar />
    <div className="p2">
      <h3>Let's sweeten your life.</h3>

      <p className="small left-align mt4">
        © Copyright Drop Technologies Inc.
        <br />
        120 Front St E, Toronto, ON M5A 1E3
      </p>

      <a href="http://litmus.com" target="_blank" className="small">
        Unsubscribe
      </a>

      <div className="mt4 mb4">
        <a href="http://litmus.com" target="_blank" className="small mr2">
          Privacy Policy
        </a>
        <a href="http://litmus.com" target="_blank" className="small">
          Terms & Conditions
        </a>
      </div>
    </div>
  </div>
)

export default Footer
