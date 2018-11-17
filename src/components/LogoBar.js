import React from 'react'
import { Button, Link } from './'

const LogoBar = ({ border = true }) => (
  <div className={`logo-bar${border ? ' border-top' : ''}`}>
    <Link href="https://b.ewd.io/T3TSSpSvuR" style={{ float: 'left' }}>
      <img
        className="drop-logo"
        alt="Logo"
        src="https://s3.amazonaws.com/drop-web-font/logo.png"
        width="60"
        height="60"
        border="0"
      />
    </Link>
    <Button className="light" href="https://b.ewd.io/T3TSSpSvuR" style={{ float: 'right' }}>
      OPEN DROP
    </Button>
  </div>
)

export default LogoBar
