import React from 'react'

import app from '../styles/app.css'
import offer from '../styles/offer.css'
import text from '../styles/text.css'
import spacing from '../styles/spacing.css'
import utils from '../styles/utils.css'

const styleHeaderTag = `${app.toString()} ${offer.toString()} ${text.toString()} ${spacing.toString()} ${utils.toString()}`

const Main = ({ preheaderText, children }) => (
  <div className="main">
    <style>{styleHeaderTag}</style>

    {preheaderText && (
      <div className="preheader-text">
        Starting tomorrow, score the best deals on your favorite brands - only with Drop.
      </div>
    )}

    <div>{children}</div>
  </div>
)

export default Main
