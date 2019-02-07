import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. This week, we're chatting all things self care. Every day, be sure to mix in a little “me time” — you deserve it."
    heroLink="https://b.ewd.io/SelfCareUS"
    hero="wellness-selfcare/wellness_personalcare_emailbanner_us_female.gif"
    title="It's Wellness Month at Drop."
    body="This week, we're chatting all things self care. Every day, be sure to mix in a little “me time” — you deserve it."
    button={<Button href="https://b.ewd.io/SelfCareUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set sephora = root ~ '647&suid=' ~ suid %}"}
    {"{% set hers = root ~ '826&suid=' ~ suid %}"}
    {"{% set toofaced = root ~ '579&suid=' ~ suid %}"}
    {"{% set tarte = root ~ '811&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set sephora = 'https://b.ewd.io/SelfCareSephoraUS' %}"}
    {"{% set hers = 'https://b.ewd.io/SelfCareHersUS' %}"}
    {"{% set toofaced = 'https://b.ewd.io/SelfCareTooFacedUS' %}"}
    {"{% set tarte = 'https://b.ewd.io/SelfCareTarteUS' %}"}
    {'{% endif %}'}

    <Offer
      brand="Longest week ever, every week?"
      body="Unwind with a Friday night bubble bath courtesy of Sephora. We recommend Philosophy's Amazing Grace Shampoo, Bath & Shower Gel for some seriously calming suds."
      image="wellness-selfcare/us_bath.png"
      link="{{ sephora }}"
    />
    <Offer
      brand="No one knows your body better than you."
      body="Hers is your one-stop shop for all the things you don't want to ask for, backed by science. No head-scratching marketing speak here - just results, made for you. Get prescription-based skincare, haircare, and even birth control - all with zero judgement. We recommend the Biotin gummies!"
      image="wellness-selfcare/us_hair.png"
      link="{{ hers }}"
    />
    <Offer
      brand="Rought night?"
      body="If you're feeling like your skin could use a little R&R, reach for Too Faced's Hangover Replenishing Face Primer. The lightweight formula hydrates, smooths, and brightens skin for a dewy, healthy-looking finish."
      image="wellness-selfcare/us_face.png"
      link="{{ toofaced }}"
    />
    <Offer
      brand="Zero sleep? Same."
      body="Wave buh bye to those bags with Tarte's pack your bags undereye patches. The vegan-friendly restorative pads soothe & hydrate the delicate undereye area, while fighting the look of puffiness, dark circles & crow's feet."
      image="wellness-selfcare/us_eyes.png"
      link="{{ tarte }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
