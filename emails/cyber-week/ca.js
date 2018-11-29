import React from 'react'
import { OfferRow, Button, Image, OfferRowTemplate } from '../../src/components'

const Offer = ({
  body, image, imageWidth, ...props
}) => (
  <OfferRow
    image={<BrandImage src={image} width={imageWidth} />}
    body={<p className="left-align">{body}</p>}
    {...props}
  />
)

const BrandImage = ({ width, ...props }) => (
  <Image className="brand-image" style={{ width: props.width }} {...props} />
)

const CyberWeek = () => (
  <OfferRowTemplate
    preheaderText="we got you covered. There's still time to grab gifts for everyone on your 🎄list with these Cyber Week deals."
    heroLink="https://b.ewd.io/CWCA"
    hero="cyber-week/header.gif"
    title="December's coming in hot."
    body="But we got you covered. There's still time to grab gifts for everyone on your 🎄list with these Cyber Week deals."
    button={
      <Button href="https://b.ewd.io/CWCA" className="mx-auto mt3" style={{ maxWidth: 300 }}>
        Shop Now
      </Button>
    }
  >
    <Offer
      brand="Gap"
      image="cyber-week/gap.jpg"
      imageWidth={160}
      body="Stay cozy in a scarf that works year-round and score up to 50% off 1,000s of styles.*"
      note="*Ends December 3. Restrictions apply."
      link="https://b.ewd.io/CWGapCA"
    />

    <Offer
      brand="Kobo"
      image="cyber-week/kobo.jpg"
      imageWidth={110}
      pointRate="10,000"
      body="A heist story set on the moon — what could possibly go wrong? Your new favorite read, from the bestselling author of The Martian."
      link="https://b.ewd.io/CWKoboCA"
      invert
    />

    <Offer
      brand="The Source"
      image="cyber-week/cuisinart.jpg"
      imageWidth={150}
      pointRate="15 PER $1"
      body="Let your Cuisinart Precision Master Stand Mixer do the heavy lifting for you. Dishwasher safe, and now, $250 off."
      link="https://b.ewd.io/CWSource"
    />

    <Offer
      brand="Indigo"
      image="cyber-week/qvc.jpg"
      imageWidth={180}
      pointRate="40 PER $1"
      body="Drown out your relatives by pumping up the volume. Beats by Dr. Dre Wireless Headphones now, at over 20% off."
      link="https://b.ewd.io/CWIndigo"
      invert
    />

    <Offer
      brand="ClassPass"
      image="cyber-week/classpass.jpg"
      imageWidth={150}
      pointRate="15,000"
      body="Make a fitness resolution - and stick to it. Your all-access pass to a global network of over 100,000 studios (and counting).*"
      note="*New customers only. Available in cities ClassPass operates"
      link="https://b.ewd.io/CWClassPassCA"
    />

    <div className="px2">
      <Image
        className="mt1 mb2 width-100 rounded"
        width="600"
        height="300"
        src="cyber-week/newbalance.jpg"
      />

      <p>
        PLUS, you could win a $400 e-gift card to New Balance! Work off that turkey in a fresh pair
        of kicks that look good - and feel good, too. Hurry, contest ends Saturday morning!
      </p>

      <Button
        href="https://b.ewd.io/CWContest"
        className="mx-auto mt3 mb3"
        style={{ maxWidth: 300, margin: '30px auto' }}
      >
        Enter now
      </Button>
    </div>
  </OfferRowTemplate>
)

export default CyberWeek
