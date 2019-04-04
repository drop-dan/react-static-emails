import React from 'react'
import { HeroImage, DefaultTemplate, Offer, Button } from '../../src/components'

const ThanksGivingEmail = () => (
  <DefaultTemplate
    preheaderText="Cook mouthwatering Canadian-sourced meals in 15 minutes."
    hero="chefsplate/chefsplate_emailbanner.png"
    title="Time *not* on your side?"
    body="Take back mealtime with a little help from your friends at Chef's Plate."
    button={<Button href="https://b.ewd.io/SpringWarbyUS">Sign Up Now</Button>}
    >
    {'{% set suid = userAttribute.suid %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set chefsplate = root ~ '896&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set chefsplate = 'https://b.ewd.io/ChefsPlateCAN' %}"}
    {'{% endif %}'}

    <Offer
      title="Why we ♥️ them?"
      button={false}
      divider={false}
    />

    <ol>
      <li>OPTIONS GALORE. Choose easy-to-cook, locally sourced meals each week</li>
      <li>CONVENIENCE, DELIVERED. Get pre-measured ingredients + recipes delivered straight to your door</li>
      <li>READY IN A PINCH. Cook quick, delectable meals - and get back to whatever else you were doing</li>
    </ol>

    <Offer
      body="Order by April 4th and get 55% off your first box + 10,000 Drop points just for cooking.*"
      button={false}
      divider={false}
    />

      <Offer
      title="On the menu this week, and ready to serve in just 15 minutes."
      button={false}
      divider={false}
    />

    <Offer
      image="chefsplate/lemonchicken.png"
      title="Creamy Lemon Chicken"
      body="with roasted broccoli on gemelli pasta."
      button={false}
    />
    <Offer
      image="chefsplate/cheeseburger.png"
      title="Applewood Black Bean Cheeseburger"
      body="with smoky BBQ sauce and mixed green salad."
      button={false}
    />
    <Offer
      image="chefsplate/beefshawarma.png"
      title="Beef Shawarma"
      body="with hummus, couscous pilaf and homemade garlic sauce."
      button="Sign Up Now"
      note="*For new customers only."
      link="{{ chefsplate }}"
      divider={false}
    />
    
  </DefaultTemplate>
)

export default ThanksGivingEmail
