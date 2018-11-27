import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Offer } from '../../src/components'

const Offer = props => <Offer {...props} imageWidth="600" imageHeight="600" button="Shop now" />

const JetEmail = () => (
  <Main preheaderText="Starting tomorrow, score the best deals on your favorite brands - only with Drop.">
    <Header />

    <HeroImage image="jet/jet-header.jpg" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb
        title="Shop like double the points is going out of style."
        description="For one week only, get DOUBLE the points when you shop at Dynamite."
      />

      <div className="divider" />

      <Offer
        image="jet/jet-her.png"
        body="Plus, major sale alert. Score 25% off on Dynamite's Labour Day Special, on now thru Tuesday September 4th, 10AM ET. Extra points, extra savings."
      />

      <Offer
        image="jet/jet-him.png"
        body="Plus, major sale alert. Score 25% off on Dynamite's Labour Day Special, on now thru Tuesday September 4th, 10AM ET. Extra points, extra savings."
      />

      <Offer
        image="jet/jet-kids.png"
        body="Plus, major sale alert. Score 25% off on Dynamite's Labour Day Special, on now thru Tuesday September 4th, 10AM ET. Extra points, extra savings."
        divider={false}
      />
    </div>

    <Footer />
  </Main>
)

export default JetEmail
