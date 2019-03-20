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
    hero="spring-fashion/_emailbanner_us.gif"
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



    <Image href="{{ giftus }}" className="width-50" width="600" src="boosted-march/Hulu_image.png" />
    <Image href="{{ giftus }}" className="width-50" width="600" src="boosted-march/Hulu_image.png" />
    <Image href="{{ giftus }}" className="width-50" width="600" src="boosted-march/Hulu_image.png" />
    <Image href="{{ giftus }}" className="width-50" width="600" src="boosted-march/Hulu_image.png" />
    <Image href="{{ giftus }}" className="width-50" width="600" src="12days-2/1-giftagram2.jpg" />
    <Image href="{{ giftus }}" className="width-50" width="600" src="12days-2/1-giftagram2.jpg" />

    <Offer
      brand="Hulu"
      body="20,000"
      image="boosted-march/Hulu_image.png"
      imageWidth={180}
      link="{{ bloomingdales }}"
      invert
    />

    <Offer
      brand="Hulu"
      body="20,000"
      image="boosted-march/Hulu_image.png"
      imageWidth={180}
      link="{{ eileen }}"
      divider={false}
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

  

  </OfferRowTemplate>
)

export default CyberWeek
