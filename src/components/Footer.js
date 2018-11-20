import React from 'react'
import { LogoBar, Link } from './'

const Footer = ({ border = true }) => (
  <div>
    <LogoBar border={border} />
    <div className="px3 mb4 pb4">
      <h3 className="my4 py2 left-align" style={{ fontSize: 22 }}>
        The free rewards app
      </h3>

      <p className="small left-align mt4">
        © Copyright Drop Technologies Inc.
        <br />
        120 Front St E, Toronto, ON M5A 1E3
      </p>

      <Link href="{{ Unsubscribe URL }}" className="small">
        Unsubscribe
      </Link>

      <div className="my4">
        <Link href="https://b.ewd.io/tcdpt8PoVR" className="small mr2">
          Privacy Policy
        </Link>
        <Link href="https://b.ewd.io/HpnaznWoVR" className="small">
          Terms & Conditions
        </Link>
      </div>
    </div>

    <div className="pb4" />
  </div>
)

export default Footer
