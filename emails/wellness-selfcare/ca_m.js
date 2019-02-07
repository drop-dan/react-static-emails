import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. This week, we're chatting all things self care. Every day, be sure to mix in a little “me time” — you deserve it."
    heroLink="https://b.ewd.io/SelfCareCA"
    hero="wellness-selfcare/wellness_personalcare_emailbanner_us_his.gif"
    title="It's Wellness Month at Drop."
    body="This week, we're chatting all things self care. Every day, be sure to mix in a little “me time” — you deserve it."
    button={<Button href="https://b.ewd.io/SelfCareCA">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set sephora = root ~ '649&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {"{% set dsc = root ~ '645&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set sephora = 'https://b.ewd.io/SelfCareSephoraCA' %}"}
    {"{% set indigo = 'https://b.ewd.io/SelfCareIndigoCA' %}"}
    {"{% set dsc = 'https://b.ewd.io/SelfCareDSCCA' %}"}
    {'{% endif %}'}

    <Offer
      brand="Kickstart your day with some suds."
      body="For a fresh mug, we recommend Lab Series Multi-Action Face Wash for Men, designed to exfoliate, condition, and remove excess oil before shaving. Finish off with Kiehl's Facial Fuel Energizing Moisturizer for Men, infused with vitamins C and E, chestnut extract, and soy."
      image="wellness-selfcare/m_face.png"
      link="{{ sephora }}"
    />
    <Offer
      brand="Decompress after a long day with a little R&R."
      body="We recommend New York Times Bestseller, 'Best Self: Be You, Only Better' by tough love guru + life coach, Mike Bayer. For something a little lighter, try Wheat Belly by William Davis."
      image="wellness-selfcare/m_mind.png"
      link="{{ indigo }}"
    />
    <Offer
      brand="Morning self-care starts with a quality shave."
      body="With Dollar Shave Club, get your closest shave ever - shipped right to your door. Choose a razor, choose how often you want it, and shave - it's as easy as that."
      image="wellness-selfcare/m_shave.png"
      link="{{ dsc }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
