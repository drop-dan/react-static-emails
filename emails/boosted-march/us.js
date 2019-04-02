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
    preheaderText="For a limited time only, take up to 4X the points from your favorite brands inside."
    heroLink="https://b.ewd.io/boostUS"
    hero="boosted-march/boosted_emailbanner.gif"
    title="Add a little spring to your step."
    body="Boosted offers are back and this week only, take up to 4X the points by shopping at your favorite brands."
    button={<Button href="https://b.ewd.io/boostUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set nike = root ~ '580&suid=' ~ suid %}"}
    {"{% set bloomingdales = root ~ '314&suid=' ~ suid %}"}
    {"{% set macys = root ~ '674&suid=' ~ suid %}"}
    {"{% set playstation = 'https://b.ewd.io/boostplaystation' %}"}
    {"{% set microsoft = root ~ '835&suid=' ~ suid %}"}
    {"{% set hulu = 'https://b.ewd.io/boosthulu' %}"}
    {"{% set acer = root ~ '641&suid=' ~ suid %}"}
    {"{% set xbox = root ~ '834&suid=' ~ suid %}"}
    {"{% set adidas = 'https://b.ewd.io/boostadidas' %}"}
    {"{% set newbalance = root ~ '655&suid=' ~ suid %}"}
    {"{% set frank = root ~ '833&suid=' ~ suid %}"}
    {"{% set dynamite = root ~ '648&suid=' ~ suid %}"}
    {"{% set garage = root ~ '678&suid=' ~ suid %}"}
    {"{% set verb = root ~ '763&suid=' ~ suid %}"}
    {"{% set toofaced = root ~ '579&suid=' ~ suid %}"}
    {"{% set paulas = root ~ '659&suid=' ~ suid %}"}
    {"{% set tatcha = root ~ '745&suid=' ~ suid %}"}
    {"{% set tarte = root ~ '811&suid=' ~ suid %}"}
    {"{% set barkbox = root ~ '399&suid=' ~ suid %}"}
    {"{% set swell = root ~ '780&suid=' ~ suid %}"}
    {"{% set urban = root ~ '827&suid=' ~ suid %}"}
    {"{% set inkbox = root ~ '693&suid=' ~ suid %}"}
    {"{% set hayneedle = root ~ '743&suid=' ~ suid %}"}
    {"{% set happy = root ~ '789&suid=' ~ suid %}"}
    {"{% set bestow = 'https://b.ewd.io/boostbestow' %}"}
    {"{% set arcadia = 'https://b.ewd.io/boostarcadia' %}"}
    {"{% set homechef = root ~ '492&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set nike = 'https://b.ewd.io/boostnike' %}"}
    {"{% set bloomingdales = 'https://b.ewd.io/boostbloomingdales' %}"}
    {"{% set macys = 'https://b.ewd.io/boostmacys' %}"}
    {"{% set microsoft = 'https://b.ewd.io/boostmicrosoft' %}"}
    {"{% set hulu = 'https://b.ewd.io/boosthulu' %}"}
    {"{% set acer = 'https://b.ewd.io/boostacer' %}"}
    {"{% set xbox = 'https://b.ewd.io/boostxbox' %}"}
    {"{% set adidas = 'https://b.ewd.io/boostadidas' %}"}
    {"{% set newbalance = 'https://b.ewd.io/boostnewbalance' %}"}
    {"{% set frank = 'https://b.ewd.io/boostfrank' %}"}
    {"{% set dynamite = 'https://b.ewd.io/boostdynamite' %}"}
    {"{% set garage = 'https://b.ewd.io/boostgarage' %}"}
    {"{% set verb = 'https://b.ewd.io/boostverb' %}"}
    {"{% set toofaced = 'https://b.ewd.io/boosttoofaced' %}"}
    {"{% set paulas = 'https://b.ewd.io/boostpaulas' %}"}
    {"{% set tarte = 'https://b.ewd.io/boosttarte' %}"}
    {"{% set tatcha = 'https://b.ewd.io/boosttatcha' %}"}
    {"{% set barkbox = 'https://b.ewd.io/boostbarkbox' %}"}
    {"{% set swell = 'https://b.ewd.io/boostswell' %}"}
    {"{% set urban = 'https://b.ewd.io/boosturban' %}"}
    {"{% set inkbox = 'https://b.ewd.io/boostinkbox' %}"}
    {"{% set hayneedle = 'https://b.ewd.io/boosthayneedle' %}"}
    {"{% set happy = 'https://b.ewd.io/boosthappy' %}"}
    {"{% set bestow = 'https://b.ewd.io/boostbestow' %}"}
    {"{% set arcadia = 'https://b.ewd.io/boostarcadia' %}"}
    {"{% set homechef = 'https://b.ewd.io/boosthomechef' %}"}
    {"{% set playstation = 'https://b.ewd.io/boostplaystation' %}"}
    {'{% endif %}'}

    <Image href="{{ microsoft }}" className="width-100" width="600" src="boosted-march/boost_surface_8.png" />
    <Image href="{{ playstation }}" className="width-50" width="600" src="boosted-march/boost_playstation.png" />
    <Image href="{{ xbox }}" className="width-50" width="600" src="boosted-march/boost_xbox.png" />
    <Image href="{{ hulu }}" className="width-50" width="600" src="boosted-march/boost_hulu.png" />
    <Image href="{{ acer }}" className="width-50" width="600" src="boosted-march/boost_acer.png" />

    <Image href="{{ nike }}" className="width-100" width="600" src="boosted-march/boost_nike_8.png" />
    <Image href="{{ adidas }}" className="width-50" width="600" src="boosted-march/boost_adidas.png" />
    <Image href="{{ newbalance }}" className="width-50" width="600" src="boosted-march/boost_newbalance.png" />
    <Image href="{{ swell }}" className="width-50" width="600" src="boosted-march/boost_swell.png" />
    <Image href="{{ happy }}" className="width-50" width="600" src="boosted-march/boost_happysocks.png" />

    <Image href="{{ macys }}" className="width-100" width="600" src="boosted-march/boost_macys_7.png" />
    <Image href="{{ bloomingdales }}" className="width-50" width="600" src="boosted-march/boost_bloomingdales.png" />
    <Image href="{{ frank }}" className="width-50" width="600" src="boosted-march/boost_frank.png" />
    <Image href="{{ dynamite }}" className="width-50" width="600" src="boosted-march/boost_dynamite_4.png" />
    <Image href="{{ garage }}" className="width-50" width="600" src="boosted-march/boost_garage_4.png" />

    <Image href="{{ verb }}" className="width-100" width="600" src="boosted-march/boost_verb_9.png" />
    <Image href="{{ toofaced }}" className="width-50" width="600" src="boosted-march/boost_toofaced_4.png" />
    <Image href="{{ tarte }}" className="width-50" width="600" src="boosted-march/boost_tarte_4.png" />
    <Image href="{{ paulas }}" className="width-50" width="600" src="boosted-march/boost_paulas.png" />
    <Image href="{{ tatcha }}" className="width-50" width="600" src="boosted-march/boost_tatcha_4.png" />

    <Image href="{{ barkbox }}" className="width-100" width="600" src="boosted-march/boost_barkbox_7.png" />
    <Image href="{{ urban }}" className="width-50" width="600" src="boosted-march/boost_urban.png" />
    <Image href="{{ inkbox }}" className="width-50" width="600" src="boosted-march/boost_inkbox_4.png" />
    <Image href="{{ homechef }}" className="width-50" width="600" src="boosted-march/boost_homechef.png" />
    <Image href="{{ bestow }}" className="width-50" width="600" src="boosted-march/boost_bestow_4.png" />
    <Image href="{{ arcadia }}" className="width-50" width="600" src="boosted-march/boost_arcadia_4.png" />
    <Image href="{{ hayneedle }}" className="width-50" width="600" src="boosted-march/boost_hayneedle_4.png" />

    <p>
    Hurry, offers end Sunday. 
    </p>

    <Button href="https://b.ewd.io/boostUS">Shop All</Button>

  </OfferRowTemplate>
)

export default CyberWeek
