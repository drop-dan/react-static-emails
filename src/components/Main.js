import React from 'react'

import app from '../styles/app.css'
import button from '../styles/button.css'
import offer from '../styles/offer.css'
import text from '../styles/text.css'
import spacing from '../styles/spacing.css'
import utils from '../styles/utils.css'

const styleHeaderTag = `${app.toString()} ${button.toString()} ${offer.toString()} ${text.toString()} ${spacing.toString()} ${utils.toString()}`

const Main = ({ preheader, children }) => (
  <div className="main" style={{ minWidth: 330 }}>
    <style>{styleHeaderTag}</style>

    {preheader && <div className="preheader-text">{preheader}</div>}

    <div>{children}</div>
  </div>
)

export default Main
