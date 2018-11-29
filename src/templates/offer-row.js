import React from 'react'
import { DefaultTemplate } from '../../src/components'

const OfferRowTemplate = ({
  hero,
  heroLink,
  title,
  body,
  button,
  children,
  preheaderText,
  ...props
}) => (
  <DefaultTemplate preheaderText={preheaderText} hero={hero} heroLink={heroLink} {...props}>
    <div className="px2">
      <h2 className="mt4 mb0">
        <b>{title}</b>
      </h2>

      <p className="my2">{body}</p>

      {button}

      <div className="divider" />
    </div>

    {children}
  </DefaultTemplate>
)

export default OfferRowTemplate
