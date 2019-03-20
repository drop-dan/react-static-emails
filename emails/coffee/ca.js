import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="The coffee trends, how-to's and just in products you need to liven up your morning."
    heroLink="https://b.ewd.io/SleepUS"
    hero="coffee/coffee_emailbanner.png"
    title="Wake up and smell the (better) coffee."
    body="Instant is for quitters."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set keurig = root ~ '494&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {"{% set well = root ~ '473&suid=' ~ suid %}"}
    {"{% set swell = root ~ '480&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set keurig = 'https://b.ewd.io/CoffeeKeurig' %}"}
    {"{% set well = 'https://b.ewd.io/CoffeeWell' %}"}
    {"{% set indigo = 'https://b.ewd.io/CoffeeIndigo' %}"}
    {"{% set swell = 'https://b.ewd.io/CoffeeSwellCAN' %}"}
    {'{% endif %}'}

    <Offer
      title="Machine quality"
      image="coffee/keurig.png"
      body="For the “omg, I'm late for work AGAIN” types, we recommend Keurig®'s new K-Elite™. The single serve coffee maker makes morning stress a thing of the past, featuring a Strong Brew setting when you need a little pick-me-up, and an Iced setting for warmer months ahead."
      link="{{ keurig }}"
    />
    <Offer
      image="coffee/indigo_2.png"
      title="Or go a little new age, old school" 
      body="Bring the cafe to your kitchen with Indigo's BODUM®POUR-OVER COFFEE MAKER. The dishwasher-safe device is ideal for Sunday relaxation, complete with your fave glossy mag, and a side of avocado toast (plus, no paper filters needed!)."
      link="{{ indigo }}"
    />
    <Offer
      title="Bean there, drink that"
      image="coffee/well.ca.png"
      body="A quality cup of joe starts with a quality bean. Complete with fruit, smoke, and earth notes, Well.ca's Ethical Bean Lush Medium Dark Roast is a favourite amongst Canadian coffee lovers. The always ethical Vancouver-based brand only roasts 100% Arabica, fair trade and organic certified coffee."
      link="{{ well }}"
    />
    <Offer
      title="Your new (desk) best friend"
      image="coffee/s'well.png"
      body="Keep your crema hot for up to 12 hours with S'well's stylish Traveler. Ranging from 12 to 20oz, the sleek portable mug features triple-walled, vacuum-insulated construction to keep your hot coffee, hot."
      link="{{ swell }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
