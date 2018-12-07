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
    preheaderText="Go on, take an extra 25% off sale - for a limited time only."
    heroLink="https://b.ewd.io/EverNewCA"
    hero="ever-new/evernew_emailbanner-3.gif"
    title="Holiday, celebrate."
    body="Go on, shop - and take an extra 25% off sale, for a limited time only."
    button={<Button href="https://b.ewd.io/EverNewCA">Shop Now</Button>}
  >
    <Offer
      brand="Makenzie One Shoulder Dress"
      image="ever-new/one-shoulder-dress.jpg"
      imageWidth={160}
      body="The one-shoulder wonder, guaranteed to turn heads."
      link="https://b.ewd.io/EverNewCA"
    />

    <Offer
      brand="Hayley Animal Wrap Mini Dress"
      image="ever-new/animal-wrap-dress.jpg"
      imageWidth={110}
      body="Move over, LBD, there's a new wardrobe staple in town."
      link="https://b.ewd.io/EverNewCA"
      invert
    />

    <Offer
      brand="Presley One Shoulder Dress"
      image="ever-new/one-shoulder-black-dress.jpg"
      imageWidth={150}
      body="For the leopard-headed, grecian goddess in all of us."
      link="https://b.ewd.io/EverNewCA"
    />

    <Offer
      brand="Katia Sequin Mini Dress"
      image="ever-new/sequin-dress.jpg"
      imageWidth={180}
      body="A little sparkle never killed nobody."
      link="https://b.ewd.io/EverNewCA"
      invert
    />

    <Offer
      brand="Alex Fur Collar Coat"
      image="ever-new/fur-coat.png"
      imageWidth={150}
      body="Bundle up in style. For added luxe, reach for the coat's removable fur collar."
      link="https://b.ewd.io/EverNewCA"
      divider={false}
    />

  </OfferRowTemplate>
)

export default CyberWeek
