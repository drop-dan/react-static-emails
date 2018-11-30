import React from 'react'
import { HeroImage, DefaultTemplate, Offer } from '../../src/components'

const ThanksGivingEmail = () => (
  <DefaultTemplate
    preheaderText="This Thanksgiving, cozy up on the couch. It's time to give thanks for friends, family - and football."
    hero="thanksgiving/thanksgiving-header.png"
    title="Happy Thanksgiving"
    body="This Thanksgiving, cozy up on the couch. It's time to give thanks for friends, family - and football."
    footer={
      <div>
        <p className="mx-auto">
          Looking for Black Friday deals? Take $10 off your first order at QVC, get 15% off + free
          shipping at New Balance, score 10% off Jet.com's hot holiday picks - and many, many more -
          only with Drop.
        </p>

        <HeroImage image="thanksgiving/thanksgiving-footer.png" />

        <p className="small">
          *Minimum $5 deposit. Eligibility restrictions apply. See website for details.
        </p>
      </div>
    }
  >
    <Offer
      image="thanksgiving/thanksgiving-image.jpg"
      tagline="NEW"
      title="Get Your $5 Free Play Credit"
      body="A side of football with your turkey. Sign up at DraftKings and earn 15,000 Drop points, plus a $5 free play credit, with a first deposit of $5 or more! Want more action? After you sign up, play in their free $10,000 fantasy football contest for Thursday night’s game between Atlanta and New Orleans!* "
      brand="Draft Kings"
      pointRate="15,000"
      imageWidth="500"
      imageHeight="250"
      button="Make your pick"
    />
  </DefaultTemplate>
)

export default ThanksGivingEmail
