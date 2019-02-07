import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. This week, we're chatting all things self care. Every day, be sure to mix in a little “me time” — you deserve it."
    heroLink="https://b.ewd.io/SelfCareCA"
    hero="wellness-selfcare/wellness_personalcare_emailbanner_ca_hers.gif"
    title="It's Wellness Month at Drop."
    body="This week, we're chatting all things self care. Every day, be sure to mix in a little “me time” — you deserve it."
    button={<Button href="https://b.ewd.io/SelfCareCA">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set sephora = root ~ '649&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {"{% set verb = root ~ '766&suid=' ~ suid %}"}
    {"{% set bodyshop = root ~ '212&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set sephora = 'https://b.ewd.io/SelfCareSephoraCA' %}"}
    {"{% set indigo = 'https://b.ewd.io/SelfCareIndigoCA' %}"}
    {"{% set verb = 'https://b.ewd.io/SelfCareVerbCA' %}"}
    {"{% set bodyshop = 'https://b.ewd.io/SelfCareBodyShopCA' %}"}
    {'{% endif %}'}

    <Offer
      brand="Longest week ever, every week?"
      body="Unwind with a Friday night bubble bath courtesy of Sephora. We recommend Philosophy's Amazing Grace Shampoo, Bath & Shower Gel for some seriously calming suds."
      image="wellness-selfcare/ca_bath.png"
      link="{{ sephora }}"
    />
    <Offer
      brand="Winter weather got your hair feeling like straw?"
      body="Keep calm and hydrate on with Verb's Hydrating Mask. The weightless conditioning treatment restores color treated, over-styled hair and adds a dose shine and softness to winter manes."
      image="wellness-selfcare/ca_hair.png"
      link="{{ verb }}"
    />
    <Offer
      brand="Overcome the January blues with a little help from a serious page-turner."
      body="We recommend Jen Sincero's You are a Badass: How to Stop Doubting Your Greatness and Start Living an Awesome Life for a well-deserved ego boost."
      image="wellness-selfcare/ca_mind.png"
      link="{{ indigo }}"
    />
    <Offer
      brand="For cracked skin in need of some love."
      body="Turn to The Body Shop's best-selling Hemp Hard-Working Hand Protector. The limited edition cream provides heavy-duty hydration for dry skin, and rocks its 100% vegetarian label with pride."
      image="wellness-selfcare/ca_skin.png"
      link="{{ bodyshop }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
