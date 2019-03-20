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
    hero="spring-fashion/springfashion_emailbanner_ca.gif"
    title="I like my money right where I can see it. Hanging in my closet. "
    body="Amen, Carrie. Now let's go shopping."
    button={<Button href="https://b.ewd.io/EverNewCA">Shop Spring Fashion</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set dynamite = root ~ '607&suid=' ~ suid %}"}
    {"{% set loft = root ~ '669&suid=' ~ suid %}"}
    {"{% set steve = root ~ '685&suid=' ~ suid %}"}
    {"{% set asos = root ~ '539&suid=' ~ suid %}"}
    {"{% set adidas = root ~ '464&suid=' ~ suid %}"}
    {"{% set forever21 = root ~ '742&suid=' ~ suid %}"}
    {"{% set warby = root ~ '618&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set dynamite = 'https://b.ewd.io/SFashionDynamite' %}"}
    {"{% set loft = 'https://b.ewd.io/SFashionLOFT' %}"}
    {"{% set steve = 'https://b.ewd.io/SFashionSM' %}"}
    {"{% set asos = 'https://b.ewd.io/SFashionASOSCA' %}"}
    {"{% set adidas = 'https://b.ewd.io/SFashionadidas' %}"}
    {"{% set forever21 = 'https://b.ewd.io/SFashionF21CA' %}"}
    {"{% set warby = 'https://b.ewd.io/SFashionWarbyCA' %}"}
    {'{% endif %}'}

    <p>
      COLOUR CREATIONS
    </p>

    <Offer
      brand="Neutral Tones"
      image="spring-fashion/neutral_ca.jpg"
      imageWidth={180}
      body="Toss this breezy tee on over a bralette and strut from work to play."
      note="Dynamite: V-Neck Blouse with Buttons"
      link="{{ dynamite }}"
    />

    <Offer
      brand="New Neon"
      image="spring-fashion/neon_ca.jpg"
      imageWidth={180}
      body="Go on, turn some heads. You'll love the limelight in this playful, lightweight piece."
      note="Forever 21: Ribbed Midi Dress in Citron & White"
      link="{{ forever21 }}"
      invert
    />

    <Offer
      brand="Polka Dots"
      image="spring-fashion/polka_can.jpg"
      imageWidth={180}
      body="I see London, I see this season's top trend. Dot your i's and cross this dress off your list."
      note="ASOS: PrettyLittleThing Side Split Midi Dress"
      link="{{ asos }}"
    />

    <p>
      NEW & NOTEWORTHY
    </p>

    <Offer
      brand="Bicycle Shorts"
      image="spring-fashion/bike_ca.jpg"
      imageWidth={180}
      body="This NYFW trend won't be in short supply any time soon. Pair with an oversized blouse and cinched belt for Saturday's best casual chic."
      note="ASOS: ASOS DESIGN Legging Shorts in Jersey Crinkle Co-ord"
      link="{{ asos }}"
      invert
    />

    <Offer
      brand="Wild Prints"
      image="spring-fashion/wild_ca.jpg"
      imageWidth={180}
      body="Walk on the trendy side in a leopard print puff sleeve, beloved by media darlings and models alike."
      note="LOFT: Leopard Print Knit Puff Sleeve Top"
      link="{{ loft }}"
    />

    <Offer
      brand="Bright Stripes"
      image="spring-fashion/stripe_ca.jpg"
      imageWidth={180}
      body="Chase the rainbow. Pair with your fave high-waisted jeans for an effortless, “just thrown on” outfit."
      note="Forever 21: Striped Button Front Top"
      link="{{ forever21 }}"
      invert
    />

    <p>
      SHOES & ACCESSORIES
    </p>

    <Offer
      brand="The Fine Print"
      image="spring-fashion/sunglasses_us.jpg"
      imageWidth={180}
      body="Shade your haters with Warby Parker's latest elevated classic."
      note="Warby Parker: Margot"
      link="{{ warby }}"
    />

    <Offer
      brand="Weave Your Magic"
      image="spring-fashion/flat_ca.jpg"
      imageWidth={180}
      body="Conquer your stomping ground in these “go with everything” spring staples."
      note="Steve Madden: Timid Tan Leather Mule"
      link="{{ steve }}"
      invert
    />

    <Offer
      brand="80s, baby"
      image="spring-fashion/shoe_ca.jpg"
      imageWidth={180}
      body="Pair with a low-key sundress for instant cool (and comfort)."
      note="adidas: Originals Continental 80 Shoes"
      link="{{ adidas }}"
      divider={false}
    />


  </OfferRowTemplate>
)

export default CyberWeek
