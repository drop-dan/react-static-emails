import React from 'react'
import { HeroImage, DefaultTemplate, Offer, Button } from '../../src/components'

const ThanksGivingEmail = () => (
  <DefaultTemplate
    preheaderText="For a hot minute only, Warby Parker is serving up four new frames in one totally new color. Get them - and expense them."
    hero="warby/warby-banner.jpg"
    title="See the world through Basil Tortoise Fade colored glasses."
    body="(They're super limited edition, so you know they're good.)"
    button={<Button href="https://b.ewd.io/WPBenefitsUS">Shop Now</Button>}
    >
    <Offer
      image="warby/FelixFrame.jpg"
      tagline="Holiday Exclusives"
      body="For a hot minute only, Warby Parker is serving up four new frames in one totally new color. Get them - and expense them - by dipping into your FSA or HSA. PLUS, you'll earn 300 points for every $1 spent. "
      brand="Warby Parker"
      pointRate="300 PER $1"
      oldRate="200 PER $1"
      imageWidth="500"
      imageHeight="250"
      button="Shop Now"
    />

       <Offer
      title="What's a FSA + HSA?"
      body="A Flexible Spending Account (FSA) and Health Spending Account (HSA) are benefits offered by employers, designed to give you funds to pay for certain medical expenses. The great news: Warby Parker prescription glasses (and sunglasses!) are covered, so you can order your glasses and expense them, too. Not sure if you have a FSA or HSA? Ask your boss or HR Manager - they'll know what's up."
      button="Shop Prescription"
      d divider={false}
    />
  </DefaultTemplate>
)

export default ThanksGivingEmail
