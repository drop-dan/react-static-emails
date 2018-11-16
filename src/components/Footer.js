import React from 'react'
import { LogoBar } from './'

const Footer = () => (
  <div>
    <LogoBar />
    <div className="px3 mb4 pb4">
      <h3 className="my4 py2 left-align" style={{ fontSize: 22 }}>
        Let's sweeten your life.
      </h3>

      <p className="small left-align mt4">
        © Copyright Drop Technologies Inc.
        <br />
        120 Front St E, Toronto, ON M5A 1E3
      </p>

      <a href="http://litmus.com" target="_blank" className="small">
        Unsubscribe
      </a>

      <div className="my4">
        <a href="http://litmus.com" target="_blank" className="small mr2">
          Privacy Policy
        </a>
        <a href="http://litmus.com" target="_blank" className="small">
          Terms & Conditions
        </a>
      </div>
    </div>

    <div className="pb4" />
  </div>
)

export default Footer
