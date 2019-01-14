import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. This week, we're tackling all things healthy eating. Make your resolutions stick with these food-fuelled offers."
    heroLink="https://b.ewd.io/WellnessFoodCA"
    hero="wellness-food/wellness_food_emailbanner_ca_3.png"
    title="It's Wellness Month at Drop."
    body="This week, we're tackling all things healthy eating. Make your resolutions stick with these food-fuelled offers."
    button={<Button href="https://b.ewd.io/WellnessFoodCA">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set hellofresh = root ~ '470&suid=' ~ suid %}"}
    {"{% set costco = root ~ '668&suid=' ~ suid %}"}
    {"{% set well = root ~ '473&suid=' ~ suid %}"}
    {"{% set ubereats = root ~ '488&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set hellofresh = 'https://b.ewd.io/FoodHelloFreshCA' %}"}
    {"{% set costco = 'https://b.ewd.io/FoodCostcoCA' %}"}
    {"{% set well = 'https://b.ewd.io/FoodWellCA' %}"}
    {"{% set ubereats = 'https://b.ewd.io/FoodUberEatsCA' %}"}
    {'{% endif %}'}

    <Offer
      brand="Hello Fresh"
      body="Looking for someone else to do the healthy meal prep footwork for you? Sign up for HelloFresh and leave your food to the professionals."
      pointRate="15,000"
      button='Sign Up'
      link="{{ hellofresh }}"
      note="Offer available only for new customers."
    />
    <Offer
      brand="Costco"
      body="Cut down on trips to the grocery store by stocking up on all your food faves. Protein powder lovers stop here."
      pointRate="25,000"
      link="{{ costco }}"
      note="Offer available only for new members."
    />
    <Offer
      brand="Well"
      body="The trusted online marketplace serves up non-GMO, organic, gluten-free and vegan products, delivered straight to your door in a snap."
      pointRate="40 PER $1"
      link="{{ well }}"
    />
    <Offer
      brand="Uber Eats"
      body="In the mood for Indian? Thai? Italian? Chinese? Uber Eats has it all - and then some. Order from your fave local watering holes and discover new hotspots you didn't know existed."
      pointRate="12,500 FIRST ORDER | 750 PER ORDER"
      link="{{ ubereats }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
