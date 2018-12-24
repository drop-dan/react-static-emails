import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Now you can take advantage of the best laid deals this side of 2018, and get cash back when you do."
    heroLink="https://b.ewd.io/BFLastChance2"
    hero="boxing-day/boxingday_emailbanner.gif"
    title="You think outside the box. We like that."
    body="Now you can take advantage of the best laid deals this side of 2018, and get cash back when you do."
    button={<Button>Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set sephora = root ~ '649&suid=' ~ suid %}"}
    {"{% set source = root ~ '521&suid=' ~ suid %}"}
    {"{% set koodo = root ~ '567&suid=' ~ suid %}"}
    {"{% set swell = root ~ '480&suid=' ~ suid %}"}
    {"{% set oldnavy = root ~ '490&suid=' ~ suid %}"}
    {"{% set forever21 = root ~ '742&suid=' ~ suid %}"}
    {"{% set indigo = root ~ '454&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set sephora = 'https://b.ewd.io/BoxingSephoraCA' %}"}
    {"{% set source = 'https://b.ewd.io/BoxingSourceCA' %}"}
    {"{% set koodo = 'https://b.ewd.io/BoxingKoodoCA' %}"}
    {"{% set swell = 'https://b.ewd.io/BoxingSwellCA' %}"}
    {"{% set oldnavy = 'https://b.ewd.io/BoxingOldNavyCA' %}"}
    {"{% set forever21 = 'https://b.ewd.io/BoxingForever21CA' %}"}
    {"{% set indigo = 'https://b.ewd.io/BoxingIndigoCA' %}"}
    {'{% endif %}'}

    <Offer
      brand="The Source"
      body="You've been waiting for the Xbox One S 1TB Fortnite bundle to go on sale. Now's your chance to snag it, at $80 off."
      pointRate="10 per $1"
      href="{{ source }}"
    />
    <Offer
      brand="Sephora"
      body="New year, new face? Beauty Insiders, switch up your tried and true products with an extra 20% sale items using code TWENTYOFF."
      pointRate="40 PER $1"
      href="{{ sephora }}"
    />
    <Offer
      brand="Koodo"
      body="Gift yourself with deals on data, $0 phones with the Tab and bonus gifts at Koodo."
      pointRate="100,000"
      href="{{ koodo }}"
    />
    <Offer
      brand="S'well"
      body="Be the change you wish to see in our plastic-obsessed world. Tale 25% off your entire purchase with code RESET18."
      pointRate="50 PER $1"
      href="{{ swell }}"
    />
    <Offer
      brand="Old Navy"
      body="Your one-stop stop for all things cozy, now at up to 60% off site-wide."
      pointRate="30 PER $1"
      href="{{ oldnavy }}"
    />
    <Offer
      brand="Forever 21"
      body="Nail your NYE look with glitterati-approved markdowns. Take an extra 50% off sale with code EXTRA50."
      pointRate="20 PER $1"
      href="{{ forever21 }}"
    />
    <Offer
      brand="Indigo"
      body="Ring in the New Year with a little more organization to your name. Score 30% off Agendas and Calendars, and up to 50% off, site-wide."
      pointRate="30 PER $1"
      href="{{ indigo }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
