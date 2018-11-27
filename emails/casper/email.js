import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Offer } from '../../src/components'

// Subject: Black Friday week starts TOMORROW! Your deals inside

const CasperEmail = () => (
  <Main preheaderText="Starting tomorrow, score the best deals on your favorite brands - only with Drop.">
    <Header />

    <HeroImage image="casper-header.jpg" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb
        title="10% Off, 10% Back"
        description="This Black Friday, Enjoy 10% off your next mattress order.  Plus, get 10% back in points."
      />

      <div className="divider" />

      <Offer
        brand="Casper"
        pointRate="25,000"
        image="mattress.jpg"
        imageWidth="600"
        imageHeight="425"
        tagline="NEW"
        title="The new Wave mattress"
        body="Finally, a mattress designed to support the way you're designed"
        divider={false}
      />
    </div>

    <Footer />
  </Main>
)

export default CasperEmail
