import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Rounding up our top brands for making your lifestyle a little more green. 💚 "
    heroLink="https://b.ewd.io/SleepUS"
    hero="earthday/go-green-earth-day.gif"
    title="Green is the new black."
    body="This Earth Day, mix in sustainable stuff. The planet will thank you for it."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% set name = userAttribute.firstName %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set warbt = root ~ '618&suid=' ~ suid %}"}
    {"{% set sephora = root ~ '649&suid=' ~ suid %}"}
    {"{% set swell = root ~ '480&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set warby = 'https://b.ewd.io/earthdaywarby' %}"}
    {"{% set sephora = 'https://b.ewd.io/earthdaysephoraca' %}"}
    {"{% set swell = 'https://b.ewd.io/earthdayswellca' %}"}
    {'{% endif %}'}

    <Offer
      title="Warby Parker"
      image="earthday/earthday_warby.jpg"
      body="Warby Parker started a glasses revolution by cutting out the middle man. By designing glasses in-house, engaging with customers directly, they provide higher-quality, better looking eyewear at a fraction of the going rate. They also donate one pair of glasses for every pair sold to someone in need. Talk about seeing clearly."
      link="{{ warby }}"
    />
    <Offer
      title="Sephora"
      image="earthday/earthday_sephora.jpg"
      body="Turn your makeup bag totally green with a little help from the beauties at Sephora. Put your best skin forward with the new clean Sephora line, Drunk Elephant and Volition Beauty."
      link="{{ sephora }}"
    />
    <Offer
      title="S'well"
      image="earthday/earthday_swell.jpg"
      body="Say so long plastic and hello to hydration 24/7 with S'well: the eco-friendly water bottle you can take anywhere. The BPA Free and reusable water bottle keeps drinks cold for up to 24 hours, and hot for up to 12. Plus, shop the limited edition Earth Day design today."
      link="{{ swell }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
