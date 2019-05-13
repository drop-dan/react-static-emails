import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="The coffee trends, how-to's and just in products you need to liven up your morning."
    heroLink="https://b.ewd.io/SleepUS"
    hero="convenience/convenience_emailbanner_draft.png"
    title="No one likes wasting time and energy on errands."
    body="Turn your life on autopilot with these delivery darlings, designed to make your life a little easier."
    button={<Button href="https://b.ewd.io/SleepUS">Set Me Up</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% set name = userAttribute.firstName %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set postmates = root ~ '899&suid=' ~ suid %}"}
    {"{% set dollarshaveclub = root ~ '692&suid=' ~ suid %}"}
    {"{% set shipt = root ~ '915&suid=' ~ suid %}"}
    {"{% set brightcellars = root ~ '916&suid=' ~ suid %}"}
    {"{% set barkbox = root ~ '399&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set postmates = 'https://b.ewd.io/ConveniencePostmatesUS' %}"}
    {"{% set dollarshaveclub = 'https://b.ewd.io/ConvenienceDollarShaveClubUS' %}"}
    {"{% set shipt = 'https://b.ewd.io/ConvenienceShiptUS' %}"}
    {"{% set brightcellars = 'https://b.ewd.io/ConvenienceBrightCellarsUS' %}"}
    {"{% set barkbox = 'https://b.ewd.io/ConvenienceBarkBoxUS' %}"}
    {'{% endif %}'}

    <Offer
      image="convenience/convenience_postmates.png"
      body="The app that gets it. You're busy, and sometimes getting off the couch to buy a new tube of toothpaste isn't going to happen. Enter Postmates: where convenience meets your fingertips. Order groceries, takeout, drinks, and more - all in a snap, and without judgement."
      link="{{ postmates }}"
      button="Get Postmates"
    />
    <Offer
      image="convenience/convenience_dollarshaveclub.png"
      body="Get Ready to look, feel, and smell your best. Not only here to get rid of your 5 o'clock shadow, Dollar Shave Club has everything to help you Get Ready. From oral care to shower products to mastering the perfect shave, Dollar Shave Club starter kits are totally customizable based on what you need. Pick and choose what you want, how often, and let Dollar Shave Club do the rest."
      link="{{ dollarshaveclub }}"
      button="Order Now"
    />
    <Offer
      image="convenience/convenience_shipt.png"
      body="Same day delivery. Can we get an amen? Shipt is like asking your best friend to pick up your groceries, and actually getting the green light. Simply scroll through the aisles, pick your poison(s), and get live updates on your order, arriving within the hour - you can even make adjustments by texting your personal shopper!"
      link="{{ shipt }}"
      button="Get Started"
    />
    <Offer
      image="convenience/convenience_brightcellars.png"
      body="Wine, delivered. Need we say more? Bright Cellars is the monthly wine club that matches you with wines you'll love. All you have to do is take their taste palate quiz, and you'll be matched with 4 new wines per month, all for just $80."
      link="{{ brightcellars }}"
      button="Take Quiz"
    />
    <Offer
      image="convenience/convenience_emailbanner_barkbox2.png"
      body="Wine, delivered. Need we say more? Bright Cellars is the monthly wine club that matches you with wines you'll love. All you have to do is take their taste palate quiz, and you'll be matched with 4 new wines per month, all for just $80."
      link="{{ barkbox }}"
      button="Join BarkBox"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
