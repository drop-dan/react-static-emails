import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop.This week, we're tackling all things fitness. Make your resolutions stick with these fit-fuelled offers."
    heroLink="https://b.ewd.io/FitnessUS"
    hero="wellness-fitness/wellness_fitness_emailbanner.gif"
    title="It's Wellness Month at Drop."
    body="This week, we're tackling all things fitness. Make your resolutions stick with these fit-fuelled offers."
    button={<Button href="https://b.ewd.io/FitnessUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set classpass = root ~ '630&suid=' ~ suid %}"}
    {"{% set nike = root ~ '580&suid=' ~ suid %}"}
    {"{% set lululemon = root ~ '778&suid=' ~ suid %}"}
    {"{% set fabletics = root ~ '802&suid=' ~ suid %}"}
    {"{% set fitbit = root ~ '595&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set classpass = 'https://b.ewd.io/FitnessClassPassUS' %}"}
    {"{% set nike = 'https://b.ewd.io/FitnessNikeUS' %}"}
    {"{% set lululemon = 'https://b.ewd.io/FitnessLuluUS' %}"}
    {"{% set fabletics = 'https://b.ewd.io/FitnessFableticsUS' %}"}
    {"{% set fitbit = 'https://b.ewd.io/FitnessFitbitUS' %}"}
    {'{% endif %}'}

    <Offer
      brand="ClassPass"
      body="Force yourself off the couch with ClassPass: the app that makes it fun (not to mention, easy) to work out. Tap, book, sweat. Excuses, be gone.*"
      pointRate="20,000"
      link="{{ classpass }}"
      button='Sign Up'
      note='*Offer available only for new members'
    />
    <Offer
      brand="Nike"
      body="Outfit yourself in exercise gear you feel good in. We recommend the new Essential Air: Air Max Dia for serious speed."
      pointRate="50 PER $1"
      link="{{ nike }}"
    />
    <Offer
      brand="Lululemon"
      body="Breathe in, breathe out. Mix in a dose of yoga to calm your mind and body throughout your fitness journey. Your psyche will thank you for it."
      pointRate="50 PER $1"
      link="{{ lululemon }}"
    />
    <Offer
      brand="Fabletics"
      body="The Kate Hudson favorite serves up affordable, stylish workout gear for everyone."
      pointRate="30,000"
      link="{{ fabletics }}"
    />
    <Offer
      brand="Fitbit"
      body="Keep track of your steps, your sleep, your calories - and more. All in one stylish band."
      pointRate="90 PER $1"
      link="{{ fitbit }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
