import React from 'react'
import { Main, Header, HeroImage, Footer, Button } from '../../src/components'

const DefaultTemplate = ({
  footer,
  hero,
  heroLink,
  title,
  body,
  button,
  link,
  children,
  preheader,
  divider = true,
}) => (
  <Main preheader={preheader}>
    <Header />

    {hero && <HeroImage href={heroLink} image={hero} />}

    <div className="py4 px2 mx-auto" style={{ maxWidth: 480 }}>
      {typeof title === 'string' ? <h1>{title}</h1> : title}

      {typeof body === 'string' ? <p className="large">{body}</p> : body}

      {button && <Button href={link}>{button}</Button>}

      {(title || body || button) && divider && <div className="divider" />}

      {children}
    </div>

    {footer}

    <Footer />
  </Main>
)

export default DefaultTemplate
