import React from 'react'
import { Main, Header, HeroImage, OfferBlurb, Footer, Item } from '../components'

const Offer = props => <Item {...props} button="Shop now" />

const JetEmail = () => (
  <Main preheaderText="Starting tomorrow, score the best deals on your favorite brands - only with Drop.">
    <Header />

    <HeroImage
      width="600"
      height="600"
      image="https://s3.amazonaws.com/drop-web-font/jet/jet-header.jpg"
    />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <OfferBlurb
        title="Shop like double the points is going out of style."
        description="For one week only, get DOUBLE the points when you shop at Dynamite."
      />

      <div className="divider" />

      <Offer
        image="https://s3.amazonaws.com/drop-web-font/jet/jet-her.png"
        imageWidth="600"
        imageHeight="600"
        body="Plus, major sale alert. Score 25% off on Dynamite's Labour Day Special, on now thru Tuesday September 4th, 10AM ET. Extra points, extra savings."
      />

      <Offer
        image="https://s3.amazonaws.com/drop-web-font/jet/jet-him.png"
        imageWidth="600"
        imageHeight="600"
        body="Plus, major sale alert. Score 25% off on Dynamite's Labour Day Special, on now thru Tuesday September 4th, 10AM ET. Extra points, extra savings."
      />

      <Offer
        image="https://s3.amazonaws.com/drop-web-font/jet/jet-kids.png"
        imageWidth="600"
        imageHeight="600"
        body="Plus, major sale alert. Score 25% off on Dynamite's Labour Day Special, on now thru Tuesday September 4th, 10AM ET. Extra points, extra savings."
        divider={false}
      />
    </div>

    <Footer />
  </Main>
)

export default JetEmail
