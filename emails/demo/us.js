import React from 'react'
import { HeroImage, DefaultTemplate, Offer, Button } from '../../src/components'

const ThanksGivingEmail = () => (
  <DefaultTemplate
    preheaderText="Take your tech game to the next level."
    hero="apple/apple_emailbanner_lastchance.png"
    title="Limited Time Remaining"
    body="Get 5X the Drop points on all eligible Apple products."
    button={<Button href="https://b.ewd.io/AppleBoost">Shop Now</Button>}
    >
    {'{% set suid = userAttribute.suid %}'}
    {'{% set name = userAttribute.firstName %}'}
    {'{% if suid is defined %}'}
    {"{% set root = 'https://www.earnwithdrop.com/user_offers/activate?offer_id=' %}"}
    {"{% set apple = root ~ '624&suid=' ~ suid %}"}
    {'{% else %}'}
    {"{% set apple = 'https://b.ewd.io/AppleBoost' %}"}
    {'{% endif %}'}

    <Offer
      image="demo/affiliate-image.jpg"
      title="Our pick:  The new iPhone XR. Take it home for as low as just $18.99/month."
      body="Marvel at all-screen design. Fall in love with the longest battery life to ever grace iPhone. Browse the 'net faster than the speed of light. And never retake a selfie, ever again. Airbrushed quality photos and 4K video for days. Level up your tech game."
      button="Shop iPhone XR"
      divider={true}
      link="{{ apple }}"
    />
    <Offer
      title="Card not linked? Have we got a gold lining for you."
      body="You can still earn points when you shop through Drop. Just tap your ‘My Offers’ tab to see a list of your Mobile Offers (including Apple!) and shop through the links provided. Easy peasy."
      button="Shop Now"
      link="{{ apple }}"
      divider={false}
    />
  </DefaultTemplate>
)

export default ThanksGivingEmail
