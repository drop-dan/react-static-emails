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
    preheaderText="Top looks from Gigi Hadid, Kendall Jenner, and more."
    heroLink="https://b.ewd.io/EverNewCA"
    hero="test-reco/justforyou_emaillbanner.png"
    title="I like my money right where I can see it. Hanging in my closet. "
    body="Amen, Carrie. Now let's go shopping."
    button={<Button href="https://b.ewd.io/EverNewCA">Shop Spring Fashion</Button>}
  >

    <Offer
      brand="Sephora"
      image="logos/sephora.png"
      pointRate="40 PER $2"
      imageWidth={180}
      body="blurb about Sephora goes here"
      button="Shop Now"
      link="https://b.ewd.io/EverNewCA"
    />

       <Offer
      brand="Lululemon"
      image="logos/lululemon.png"
      pointRate="40 PER $1"
      imageWidth={180}
      body="blurb about Lululemon goes here"
      button="Shop Now"
      link="https://b.ewd.io/EverNewCA"
      invert
    />
    
    <Offer
      brand="Sephora"
      image="logos/sephora.png"
      pointRate="40 PER $1"
      imageWidth={180}
      body="blurb about Sephora goes here"
      button="Shop Now"
      link="https://b.ewd.io/EverNewCA"
    />

    <Offer
      brand="Lululemon"
      image="logos/lululemon.png"
      pointRate="40 PER $1"
      imageWidth={180}
      body="blurb about Lululemon goes here"
      button="Shop Now"
      link="https://b.ewd.io/EverNewCA"
      invert
    />

  </OfferRowTemplate>
)

export default CyberWeek
