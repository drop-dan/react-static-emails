import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Now you can take advantage of the best laid deals this side of 2018, and get cash back when you do."
    heroLink="https://b.ewd.io/BoxingDayUS"
    hero="boxing-day/saleonsale_emailbanner.gif"
    title="Our favourite brands are cleaning house."
    body="Now's the time to stock up on all the stuff you love, for less."
    button={<Button href="https://b.ewd.io/BoxingDayUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set macy = root ~ '674&suid=' ~ suid %}"}
    {"{% set sephora = root ~ '647&suid=' ~ suid %}"}
    {"{% set samsclub = root ~ '322&suid=' ~ suid %}"}
    {"{% set swell = root ~ '780&suid=' ~ suid %}"}
    {"{% set oldnavy = root ~ '491&suid=' ~ suid %}"}
    {"{% set forever21 = root ~ '445&suid=' ~ suid %}"}
    {"{% set ae = root ~ '632&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set macy = 'https://b.ewd.io/BoxingMacysUS' %}"}
    {"{% set sephora = 'https://b.ewd.io/BoxingSephoraUS' %}"}
    {"{% set samsclub = 'https://b.ewd.io/BoxingSamsUS' %}"}
    {"{% set swell = 'https://b.ewd.io/BoxingSwellUS' %}"}
    {"{% set oldnavy = 'https://b.ewd.io/BoxingOldNavyUS' %}"}
    {"{% set forever21 = 'https://b.ewd.io/BoxingForeverUS' %}"}
    {"{% set ae = 'https://b.ewd.io/BoxingAEUS' %}"}
    {'{% endif %}'}

    <Offer
      brand="Macy's"
      body="The iconic department store with something for everyone. Take 20% off + free shipping on orders over $49 with code JOY."
      pointRate="40 per $1"
      link="{{ macy }}"
    />
    <Offer
      brand="Sephora"
      body="New year, new face? Beauty Insiders, switch up your tried and true products with an extra 20% sale items using code TWENTYOFF."
      pointRate="40 PER $1"
      link="{{ sephora }}"
    />
    <Offer
      brand="Sam's Club"
      body="Hosting NYE? Skip the stress with Instant Savings on hundreds of entertaining essentials."
      pointRate="30 PER $1"
      link="{{ samsclub }}"
    />
    <Offer
      brand="S'well"
      body="Be the change you wish to see in our plastic-obsessed world. Tale 25% off your entire purchase with code RESET18."
      pointRate="50 PER $1"
      link="{{ swell }}"
    />
    <Offer
      brand="Old Navy"
      body="Your one-stop stop for all things cozy, now at up to 60% off site-wide."
      pointRate="30 PER $1"
      link="{{ oldnavy }}"
    />
    <Offer
      brand="Forever 21"
      body="Nail your NYE look with glitterati-approved markdowns. Take an extra 50% off sale with code EXTRA50."
      pointRate="40 PER $1"
      link="{{ forever21 }}"
    />
    <Offer
      brand="American Eagle"
      body="Our fave destination for all things denim and classic crew. Snag up to 40% off, site-wide."
      pointRate="10 PER $1"
      link="{{ ae }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
