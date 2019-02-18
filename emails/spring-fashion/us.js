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
    preheaderText="The beauty you want minus the ingredients you don't. Plus, earn points on every $1 spent at Sephora."
    heroLink="https://b.ewd.io/EverNewCA"
    hero="spring-fashion/springfashion_emailbanner_us.gif"
    title="I like my money right where I can see it."
    body="Hanging in my closet. Amen, Carrie. Now let's go shopping."
    button={<Button href="https://b.ewd.io/EverNewCA">Activate Offer</Button>}
  >
    <Offer
      brand="Indie Lee Brightening Cleanser"
      image="spring-fashion/neutral_us.jpg"
      imageWidth={180}
      body="A cleanser, makeup remover, and mask all in one featuring vitamin C, antioxidants and plant extracts ($34)."
      link="https://b.ewd.io/EverNewCA"
    />

    <Offer
      brand="Caudalie Moisturizing Sorbet"
      image="sephora-pilot3/sephora_product2.jpg"
      imageWidth={180}
      body="A bestselling, ultra-lightweight soothing and hydrating gel-cream ($20)."
      link="https://b.ewd.io/EverNewCA"
      invert
    />

    <Offer
      brand="Summer Fridays Jet Lag Mask"
      image="sephora-pilot3/sephora_product3.jpg"
      imageWidth={180}
      body="A one-of-a-kind hydrating cream face mask delivering results in just one application ($48)."
      link="https://b.ewd.io/EverNewCA"
    />

    <Offer
      brand="RMS Beauty Un Cover-Up Foundation/Concealer"
      image="sephora-pilot3/sephora_product4.jpg"
      imageWidth={180}
      body="A skin-perfecting concealer and foundation for the under-eye area and face ($36)."
      link="https://b.ewd.io/EverNewCA"
      invert
    />

    <Offer
      brand="Bite Beauty Lipstick Collection"
      image="sephora-pilot3/sephora_product5.jpg"
      imageWidth={180}
      body="A limited-edition of award-winning Amuse Bouche Lipstick, in warm shades inspired by toasted spices ($26)."
      link="https://b.ewd.io/EverNewCA"
    />

    <Offer
      brand="Lilah B Bronzed Beauty Bronzer Duo"
      image="sephora-pilot3/sephora_product6.jpg"
      imageWidth={180}
      body="A multipurpose bronzer duo to highlight, contour, or blend for a sunkissed glow ($42)."
      link="https://b.ewd.io/EverNewCA"
      invert
    />

    <Offer
      brand="Herbivore Emerald Cannabis Sativa Hemp Seed Deep Moisture Glow Oil"
      image="sephora-pilot3/sephora_product7.jpg"
      imageWidth={180}
      body="A glow-inducing blend of cannabis sativa hemp seed oil, squalane, and adaptogens to calm and nourish skin ($48)."
      link="https://b.ewd.io/EverNewCA"
    />

  </OfferRowTemplate>
)

export default CyberWeek
