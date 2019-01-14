import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. This week, we're tackling all things fitness. Make your resolutions stick with these fit-fuelled offers."
    heroLink="https://b.ewd.io/FitnessCAN"
    hero="wellness-fitness/wellness_fitness_emailbanner.gif"
    title="It's Wellness Month at Drop."
    body="This week, we're tackling all things fitness. Make your resolutions stick with these fit-fuelled offers."
    button={<Button href="https://b.ewd.io/FitnessCAN">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set classpass = root ~ '631&suid=' ~ suid %}"}
    {"{% set lululemon = root ~ '779&suid=' ~ suid %}"}
    {"{% set adidas = root ~ '464&suid=' ~ suid %}"}
    {"{% set reebok = root ~ '569&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set classpass = 'https://b.ewd.io/FitnessClassPassCA' %}"}
    {"{% set lululemon = 'https://b.ewd.io/FitnessLuluCA' %}"}
    {"{% set adidas = 'https://b.ewd.io/FitnessadidasCA' %}"}
    {"{% set reebok = 'https://b.ewd.io/FitnessReebokCA' %}"}
    {'{% endif %}'}

    <Offer
      brand="ClassPass"
      body="Force yourself off the couch with ClassPass: the app that makes it fun (not to mention, easy) to work out. Tap, book, sweat. Excuses, be gone.*"
      pointRate="20,000"
      button='Sign Up'
      link="{{ classpass }}"
      note='*Offer available only for new members'
    />
    <Offer
      brand="Lululemon"
      body="Breathe in, breathe out. Mix in a dose of yoga to calm your mind and body throughout your fitness journey. Your psyche will thank you for it."
      pointRate="50 PER $1"
      link="{{ lululemon }}"
    />
    <Offer
      brand="adidas"
      body="Outfit yourself in exercise gear you feel good in. We recommend the new (reborn) Falcon for the unapologetic at heart."
      pointRate="50 PER $1"
      link="{{ adidas }}"
    />
    <Offer
      brand="Reebok"
      body="Show CrossFit who's boss. Shop Reebok for fitness apparel and gear that loves to move as much as you do."
      pointRate="50 PER $1"
      link="{{ reebok }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
