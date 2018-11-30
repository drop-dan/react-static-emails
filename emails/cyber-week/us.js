import React from 'react'
import { OfferRow, Button, Image, OfferRowTemplate } from '../../src/components'

const BrandImage = ({ width, ...props }) => (
  <Image className="brand-image" style={{ width: props.width }} {...props} />
)

const Offer = ({
  body, image, imageWidth, ...props
}) => (
  <OfferRow
    image={<BrandImage src={image} width={imageWidth} />}
    body={<p className="left-align">{body}</p>}
    {...props}
  />
)

const CyberWeek = () => (
  <OfferRowTemplate
    preheaderText="we got you covered. There's still time to grab gifts for everyone on your 🎄list with these Cyber Week deals."
    heroLink="https://b.ewd.io/CWUS"
    hero="cyber-week/header.gif"
    title="December's coming in hot."
    body="But we got you covered. There's still time to grab gifts for everyone on your 🎄list with these Cyber Week deals."
    button={<Button href="https://b.ewd.io/CWUS">Shop Now</Button>}
  >
    <Offer
      brand="Gap"
      image="cyber-week/gap.jpg"
      imageWidth={160}
      body="Stay cozy in a scarf that works year-round and score up to 50% off 1,000s of styles.*"
      pointRate="60 PER $1"
      note="*Ends December 3. Restrictions apply."
      link="https://b.ewd.io/CWGapUS"
    />

    <Offer
      invert
      brand="Kobo"
      image="cyber-week/kobo.jpg"
      imageWidth={110}
      pointRate="10,000"
      body="A heist story set on the moon — what could possibly go wrong? Your new favorite read, from the bestselling author of The Martian."
      link="https://b.ewd.io/CWKobo"
    />

    <Offer
      brand="Jet"
      image="cyber-week/nespresso.jpg"
      imageWidth={180}
      pointRate="50 PER $1"
      body="Get up and running with the tap of a button. The Nespresso VertuoPlus Maker by DeLonghi makes it easy to break with routine. Now, 35% off."
      link="https://b.ewd.io/CWJet"
    />

    <Offer
      invert
      brand="QVC"
      image="cyber-week/qvc.jpg"
      imageWidth={180}
      pointRate="50 PER $1"
      body="Drown out your relatives by pumping up the volume. Beats by Dr. Dre Wireless Headphones now, at over 20% off."
      link="https://b.ewd.io/CWQVC"
    />

    <Offer
      brand="ClassPass"
      image="cyber-week/classpass.jpg"
      imageWidth={150}
      pointRate="15,000"
      body="Make a fitness resolution - and stick to it. Your all-access pass to a global network of over 100,000 studios (and counting).*"
      note="*New customers only. Available in cities ClassPass operates"
      link="https://b.ewd.io/CWClassPass"
    />

    <div className="px2">
      <Image
        width="600"
        height="300"
        src="cyber-week/newbalance.jpg"
        className="width-100 rounded"
      />

      <p>
        PLUS, you could win a $400 e-gift card to New Balance! Work off that turkey in a fresh pair
        of kicks that look good - and feel good, too. Hurry, contest ends Saturday morning!{' '}
      </p>

      <Button href="https://b.ewd.io/CWContest">Enter now</Button>
    </div>
  </OfferRowTemplate>
)

export default CyberWeek
