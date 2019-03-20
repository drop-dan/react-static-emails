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
    hero="spring-fashion/springfashion_emailbanner_us.gif"
    title="I like my money right where I can see it. Hanging in my closet. "
    body="Amen, Carrie. Now let's go shopping."
    button={<Button href="https://b.ewd.io/EverNewCA">Shop Spring Fashion</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set eileen = root ~ '817&suid=' ~ suid %}"}
    {"{% set bloomingdales = root ~ '314&suid=' ~ suid %}"}
    {"{% set macys = root ~ '674&suid=' ~ suid %}"}
    {"{% set asos = root ~ '516&suid=' ~ suid %}"}
    {"{% set nakd = root ~ '558&suid=' ~ suid %}"}
    {"{% set forever21 = root ~ '445&suid=' ~ suid %}"}
    {"{% set warby = root ~ '517&suid=' ~ suid %}"}
    {"{% set nisolo = root ~ '646&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set eileen = 'https://b.ewd.io/SFashionEFUS' %}"}
    {"{% set bloomingdales = 'https://b.ewd.io/SFashionBloomingdales' %}"}
    {"{% set macys = 'https://b.ewd.io/SFashionMacys' %}"}
    {"{% set asos = 'https://b.ewd.io/SFashionASOSUS' %}"}
    {"{% set nakd = 'https://b.ewd.io/SFashionNAKD' %}"}
    {"{% set forever21 = 'https://b.ewd.io/SFashionF21US' %}"}
    {"{% set warby = 'https://b.ewd.io/SFashionWarbyUS' %}"}
    {"{% set nisolo = 'https://b.ewd.io/SFashionNisolo' %}"}
    {'{% endif %}'}

    <p>
      COLOR CREATIONS
    </p>

    <Offer
      brand="Neutral Tones"
      image="spring-fashion/neutral_us.jpg"
      imageWidth={180}
      body="Sustainable fiber? Yes, please. This eco-friendly, laid-back look is perfect for strutting from work to play."
      note="Eileen Fisher: Tencil Linen Lantern Pant"
      link="{{ eileen }}"
    />

    <Offer
      brand="New Neon"
      image="spring-fashion/neon_us.jpg"
      imageWidth={180}
      body="Go on, turn some heads. You'll love the limelight in this playful, lightweight piece."
      note="Bloomingdale's: LOST AND WANDER Bloody Mary Double Tie Dress"
      link="{{ bloomingdales }}"
      invert
    />

    <Offer
      brand="Polka Dots"
      image="spring-fashion/polka_us.jpg"
      imageWidth={180}
      body="I see London, I see this season's top trend. Dot your i's and cross this top off your list."
      note="Macy's: RACHEL Rachel Roy Val Turtleneck Mesh Top"
      link="{{ macys }}"
    />

    <p>
      NEW & NOTEWORTHY
    </p>

    <Offer
      brand="Bicycle Shorts"
      image="spring-fashion/bike_us.jpg"
      imageWidth={180}
      body="This NYFW trend won't be in short supply any time soon. Pair with an oversized blouse and cinched belt for Saturday's best casual chic."
      note="ASOS: Monki Legging Shorts in Khaki"
      link="{{ asos }}"
      invert
    />

    <Offer
      brand="Wild Prints"
      image="spring-fashion/wild_us.jpg"
      imageWidth={180}
      body="Walk on the trendy side in a pair of eye-catching statement pants, beloved by media darlings and models alike."
      note="NA-KD: Snake Print PU Pant"
      link="{{ nakd }}"
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
      image="spring-fashion/flats_us.jpg"
      imageWidth={180}
      body="Conquer your stomping ground in these “go with everything” spring staples."
      note="Nisolo: Ecuador Huarache Sandal"
      link="{{ nisolo }}"
      invert
    />

    <Offer
      brand="(Not Your) Last Straw"
      image="spring-fashion/bag_us.jpg"
      imageWidth={180}
      body="Grasp at straws, but make it fashion with this lightweight natural bag."
      note="Bloomingdale's: FAITHFULL THE BRAND Freya Round Beach Bag"
      link="{{ bloomingdales }}"
      divider={false}
    />


  </OfferRowTemplate>
)

export default CyberWeek
