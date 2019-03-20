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
    {'{% set name = userAttribute.firstName %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set jet = root ~ '513&suid=' ~ suid %}"}
    {"{% set thrive = root ~ '656&suid=' ~ suid %}"}
    {"{% set brandless = root ~ '714&suid=' ~ suid %}"}
    {"{% set swell = root ~ '780&suid=' ~ suid %}"}
    {"{% set drizly = root ~ '606&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set jet = 'https://b.ewd.io/CoffeeJet' %}"}
    {"{% set thrive = 'https://b.ewd.io/CoffeeThrive' %}"}
    {"{% set brandless = 'https://b.ewd.io/CoffeeBrandless' %}"}
    {"{% set swell = 'https://b.ewd.io/CoffeeSwellUS' %}"}
    {"{% set drizly = 'https://b.ewd.io/CoffeeDrizly' %}"}
    {'{% endif %}'}

    <Offer
      title="Machine quality "
      image="coffee/jet.com.png"
      body="For the “omg, I'm late for work AGAIN” types, we recommend Nespresso's VertuoPlus Coffee and Espresso Maker from Jet. The single serve maker uses Centrifusion™ technology to pump out the perfect crema, every time - and fast."
      link="{{ jet }}"
    />
    <Offer
      title="Or go a little new age, old school"
      image="coffee/brandless_2.png"
      body="Bring the cafe to your kitchen with Brandless's Porcelain Pour Over Coffee Cone. The dishwasher-safe device is ideal for Sunday relaxation, complete with your fave glossy mag, and a side of avocado toast."
      link="{{ brandless }}"
    />
    <Offer
      image="coffee/thrivemarket.png"
      title="Bean there, drink that " 
      body="A quality cup of joe starts with a great bean. Thrive Market's Organic Ground Breakfast Blend serves up flavors of dark chocolate, toffee, and caramel, ft. invigorating undertones and a sweet finish. The online marketplace always ensures its beans are ethically sourced — with this particular blend originating from Peru, and roasted fresh daily in sunny California."
      link="{{ thrive }}"
    />
    <Offer
      title="Your new (desk) best friend"
      image="coffee/s'well.png"
      body="Keep your crema hot for up to 12 hours with S'well's stylish Traveler. Ranging from 12 to 20oz, the sleek portable mug features triple-walled, vacuum-insulated construction to keep your hot coffee, hot."
      link="{{ swell }}"
    />
    <Offer
      title="We'll drink to caffeine"
      image="coffee/drizly_2.png"
      body="Dozing during cocktail hour? Order a late night pick-me-up in the form of Drizly's Espresso Martini. The Grey Goose-infused cocktail pairs creme de cacao with its bitter espresso counterpart for an all-around savoury sip."
      link="{{ drizly }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
