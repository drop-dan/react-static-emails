import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer } from '../../src/components'

const DefaultEmail = () => (
  <Main preheaderText="This is a test email">
    <Header />

    <HeroImage image="default.png" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb
        title="Nothing to see here"
        description="You entered an email name that doesn't exist. Or maybe I broke something ¯\_(ツ)_/¯"
      />
    </div>

    <Footer />
  </Main>
)

export default DefaultEmail
