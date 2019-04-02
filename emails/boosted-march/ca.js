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
    heroLink="https://b.ewd.io/boostCA"
    hero="boosted-march/boosted_emailbanner.gif"
    title="Add a little spring to your step."
    body="Boosted offers are back, and this week only, take up to 4X the points by shopping at your favourite brands."
    button={<Button href="https://b.ewd.io/boostCA">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set bloomingdales = root ~ '313&suid=' ~ suid %}"}
    {"{% set microsoft = root ~ '861&suid=' ~ suid %}"}
    {"{% set xbox = root ~ '860&suid=' ~ suid %}"}
    {"{% set frank = root ~ '844&suid=' ~ suid %}"}
    {"{% set dynamite = root ~ '607&suid=' ~ suid %}"}
    {"{% set garage = root ~ '677&suid=' ~ suid %}"}
    {"{% set verb = root ~ '766&suid=' ~ suid %}"}
    {"{% set paulas = root ~ '642&suid=' ~ suid %}"}
    {"{% set barkbox = root ~ '400&suid=' ~ suid %}"}
    {"{% set swell = root ~ '480&suid=' ~ suid %}"}
    {"{% set tarte = root ~ '883&suid=' ~ suid %}"}
    {"{% set inkbox = root ~ '694&suid=' ~ suid %}"}
    {"{% set well = root ~ '473&suid=' ~ suid %}"}
    {"{% set keurig = root ~ '494&suid=' ~ suid %}"}
    {"{% set koho = 'https://b.ewd.io/boostkohoca' %}"}
    {'{% else %}'}
    {"{% set bloomingdales = 'https://b.ewd.io/boostbloomingdalesca' %}"}
    {"{% set microsoft = 'https://b.ewd.io/boostmicrosoftca' %}"}
    {"{% set xbox = 'https://b.ewd.io/boostxboxca' %}"}
    {"{% set frank = 'https://b.ewd.io/boostfrankca' %}"}
    {"{% set dynamite = 'https://b.ewd.io/boostdynamiteca' %}"}
    {"{% set garage = 'https://b.ewd.io/boostgarageca' %}"}
    {"{% set verb = 'https://b.ewd.io/boostverbca' %}"}
    {"{% set tarte = 'https://b.ewd.io/boosttarteca' %}"}
    {"{% set paulas = 'https://b.ewd.io/boostpaulasca' %}"}
    {"{% set barkbox = 'https://b.ewd.io/boostbarkboxca' %}"}
    {"{% set swell = 'https://b.ewd.io/boostswellca' %}"}
    {"{% set well = 'https://b.ewd.io/boostwellca' %}"}
    {"{% set inkbox = 'https://b.ewd.io/boostinkboxca' %}"}
    {"{% set keurig = 'https://b.ewd.io/boostkeurigca' %}"}
    {"{% set koho = 'https://b.ewd.io/boostkohoca' %}"}
    {'{% endif %}'}

    <Image href="{{ microsoft }}" className="width-100" width="600" src="boosted-march/boost_surface_8.png" />
    <Image href="{{ xbox }}" className="width-50" width="600" src="boosted-march/boost_xbox.png" />
    <Image href="{{ koho }}" className="width-50" width="600" src="boosted-march/boost_koho.png" />
    
    <Image href="{{ swell }}" className="width-100" width="600" src="boosted-march/boost_swell_7.png" />
    <Image href="{{ barkbox }}" className="width-50" width="600" src="boosted-march/boost_barkbox.png" />
    <Image href="{{ keurig }}" className="width-50" width="600" src="boosted-march/boost_keurig.png" />
    <Image href="{{ inkbox }}" className="width-50" width="600" src="boosted-march/boost_inkbox_4.png" />
    <Image href="{{ well }}" className="width-50" width="600" src="boosted-march/boost_well.ca.png" />
    
    <Image href="{{ verb }}" className="width-100" width="600" src="boosted-march/boost_verb_9.png" />
    <Image href="{{ tarte }}" className="width-50" width="600" src="boosted-march/boost_tarte_4.png" />
    <Image href="{{ paulas }}" className="width-50" width="600" src="boosted-march/boost_paulas.png" />
    <Image href="{{ bloomingdales }}" className="width-50" width="600" src="boosted-march/boost_bloomingdales.png" />
    <Image href="{{ frank }}" className="width-50" width="600" src="boosted-march/boost_frank.png" />
    <Image href="{{ dynamite }}" className="width-50" width="600" src="boosted-march/boost_dynamite_4.png" />
    <Image href="{{ garage }}" className="width-50" width="600" src="boosted-march/boost_garage_4.png" />

    <p>
    Hurry, offers end Sunday. 
    </p>

    <Button href="https://b.ewd.io/boostCA">Shop All</Button>

  </OfferRowTemplate>
)

export default CyberWeek
