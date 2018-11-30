import React from 'react'
import { Button, Link, Image } from './'

const LogoBar = ({ border = true }) => (
  <div className={`logo-bar${border ? ' border-top' : ''}`}>
    <Link href="https://b.ewd.io/T3TSSpSvuR" style={{ float: 'left' }}>
      <Image className="drop-logo" alt="Logo" src="logo.png" width="60" height="60" border="0" />
    </Link>

    <Button className="light m0" href="https://b.ewd.io/T3TSSpSvuR" style={{ float: 'right' }}>
      OPEN DROP
    </Button>
  </div>
)

export default LogoBar
