import React from 'react'
import { Main, Header, HeroImage, Footer } from '../../src/components'

const DefaultTemplate = ({
  footer,
  hero,
  heroLink,
  title,
  body,
  button,
  children,
  preheaderText,
}) => (
  <Main preheaderText={preheaderText}>
    <Header />

    {hero && <HeroImage href={heroLink} image={hero} />}

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      {title && <h1 className="mt4 mb0">{title}</h1>}

      {typeof body === 'string' ? <p className="my1 large">{body}</p> : body}

      {button}

      {(title || body || button) && <div className="divider" />}

      {children}
    </div>

    {footer}

    <Footer />
  </Main>
)

export default DefaultTemplate
