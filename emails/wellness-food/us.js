import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="It's Wellness Month at Drop. This week, we're tackling all things healthy eating. Make your resolutions stick with these food-fuelled offers."
    heroLink="https://b.ewd.io/WellnessFoodUS"
    hero="wellness-food/wellness_food_emailbanner_us_4.png"
    title="It's Wellness Month at Drop."
    body="This week, we're tackling all things healthy eating. Make your resolutions stick with these food-fuelled offers."
    button={<Button href="https://b.ewd.io/WellnessFoodUS">Shop All</Button>}
  >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set thrive = root ~ '656&suid=' ~ suid %}"}
    {"{% set blueapron = root ~ '804&suid=' ~ suid %}"}
    {"{% set brandless = root ~ '714&suid=' ~ suid %}"}
    {"{% set vitaminshoppe = root ~ '582&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set thrive = 'https://b.ewd.io/FoodThriveUS' %}"}
    {"{% set blueapron = 'https://b.ewd.io/FoodBlueApronUS' %}"}
    {"{% set brandless = 'https://b.ewd.io/FoodBrandlessUS' %}"}
    {"{% set vitaminshoppe = 'https://b.ewd.io/FoodVitaminShoppe' %}"}
    {'{% endif %}'}

    <Offer
      brand="Thrive Market"
      body="Welcome to your new, one-stop shop for non-GMO, organic, gluten-free, and vegan products - for less. Take 25% OFF your first order plus get a 30-day free trial membership.*"
      pointRate="15,000"
      link="{{ thrive }}"
      button='Sign Up'
      note="*Offer available only for new members. Discount valid on orders $49+, max. $20 discount."
    />
    <Offer
      brand="Blue Apron"
      body="Looking for someone else to do the healthy meal prep footwork for you? Sign up for Blue Apron and leave your food to the professionals."
      pointRate="35,000"
      link="{{ blueapron }}"
      note="Offer available only for new customers."
    />
    <Offer
      brand="Brandless"
      body="Your online shop for certified organic, gluten-free, and non-GMO baking and mixing bundles - all for just $3 a pop."
      pointRate="50 PER $1"
      link="{{ brandless }}"
    />
    <Offer
      brand="The Vitamin Shoppe"
      body="For protein powder, spirulina, smoothies, collagen, and boosters galore - shop The Vitamin Shoppe."
      pointRate="50 PER $1"
      link="{{ vitaminshoppe }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
