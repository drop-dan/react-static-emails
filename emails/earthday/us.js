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
    {"{% set nisolo = root ~ '646&suid=' ~ suid %}"}
    {"{% set thrive = root ~ '656&suid=' ~ suid %}"}
    {"{% set sephora = root ~ '905&suid=' ~ suid %}"}
    {"{% set swell = root ~ '780&suid=' ~ suid %}"}
    {"{% set backcountry = root ~ '687&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set nisolo = 'https://b.ewd.io/earthdaynisolo' %}"}
    {"{% set thrive = 'https://b.ewd.io/earthdaythrive' %}"}
    {"{% set sephora = 'https://b.ewd.io/earthdaysephoraus' %}"}
    {"{% set swell = 'https://b.ewd.io/earthdayswellus' %}"}
    {"{% set backcountry = 'https://b.ewd.io/earthdaybackcountry' %}"}
    {'{% endif %}'}

    <Offer
      title="Thrive Market"
      image="earthday/earthday_thrive.jpg"
      body="Your one-stop shop for non-GMO, organic, gluten-free, and vegan products, Thrive Market is on a mission to make healthy living easy and affordable - for everyone. They even have clean wine!"
      link="{{ thrive }}"
    />
      <Offer
      image="earthday/earthday_nisolo3.jpg"
      title="Nisolo" 
      body="Nisolo is all about sustainability - especially when it comes to fashion. The direct-to-consumer lifestyle brand produces intentionally designed, ethically-made, and fairly priced shoes and accessories, so you never have to worry about where - or how - your leather is made again."
      link="{{ nisolo }}"
    />
     <Offer
      title="Backcountry"
      image="earthday/earthday_backcountry2.jpg"
      body="Backcountry is an outdoor junkie's digital playground. Featuring hundreds of brands rooted in sustainability - like Patagonia, Arc'teryx, and The North Face, to rattle off a few - you're sure to find something to tickle your green thumb."
      link="{{ backcountry }}"
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
