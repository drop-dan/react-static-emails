import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Item } from '../../src/components'

const ThanksGivingEmail = () => (
  <Main preheaderText="This Thanksgiving, cozy up on the couch. It's time to give thanks for friends, family - and football.">
    <Header />

    <HeroImage image="thanksgiving/thanksgiving-header.png" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb
        title="Happy Thanksgiving"
        description="This Thanksgiving, cozy up on the couch. It's time to give thanks for friends, family - and football."
      />

      <div className="divider" />

      <Item
        image="thanksgiving/thanksgiving-image.jpg"
        logo="thanksgiving/draft-kings.png"
        tagline="NEW"
        title="Get Your $5 Free Play Credit"
        body="A side of football with your turkey. Sign up at DraftKings and earn 15,000 Drop points, plus a $5 free play credit, with a first deposit of $5 or more! Want more action? After you sign up, play in their free $10,000 fantasy football contest for Thursday night’s game between Atlanta and New Orleans!* "
        brandName="Draft Kings"
        pointRate="15,000"
        imageWidth="500"
        imageHeight="250"
        button="Make your pick"
        divider={false}
      />
    </div>

    <div className="divider" />

    <div className="px2 mb4 mx-auto" style={{ maxWidth: 480 }}>
      <p>
        Looking for Black Friday deals? Take $10 off your first order at QVC, get 15% off + free
        shipping at New Balance, score 10% off Jet.com's hot holiday picks - and many, many more -
        only with Drop.
      </p>
    </div>

    <HeroImage image="thanksgiving/thanksgiving-footer.png" />

    <p className="small mx2 my4">
      *Minimum $5 deposit. Eligibility restrictions apply. See website for details.
    </p>

    <Footer />
  </Main>
)

export default ThanksGivingEmail
