import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Don't leave your skin high and dry. Put your best face forward and earn 100 points for every dollar you spend."
    heroLink="https://b.ewd.io/SleepUS"
    hero="sephora-pilot2/sephora_emailbanner_part2.gif"
    title="Don't leave your skin high and dry."
    body="Put your best face forward and earn 100 points for every dollar you spend."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >

    <Offer
      brand="Let There be Bright"
      image="sephora-pilot2/saturdayskin_mask.png"
      tagline="$6.00"
      title="SATURDAY SKIN Spotlight Brightening Mask"
      body="Wake up tired-looking skin. Rooted in science but all about natural ingredients, Saturday Skin's Spotlight Brightening Mask helps diminish the look of dark spots to uncover your round-the-clock glow."
      button="Shop Now"
    />
    <Offer
      brand="Daily Dose of Moisture"
      image="sephora-pilot2/sephora_mask.png"
      tagline="$6.00"
      title="Sephora Collection Face Mask"
      body="From Coconut to Pineapple to Grape - Sephora's cruelty-free Face Mask line has your dry mug covered. If you've got 15 minutes to spare, spare them for a shot of serious skincare + fun."
      button="Shop Now"
    />
    <Offer
      image="sephora-pilot2/origins_mask.png"
      brand="Charcoal to the Rescue"
      tagline="$13.00"
      title="ORIGINS Clear Improvement® Active Charcoal Mask to Clear Pores Mini"
      body="Reduce those pores. The sulfate-free charcoal topper helps flush out environmental toxins, dirt, and debris. Results in as little as 7 days."
      button="Shop Now"
    />
    <Offer
      brand="OMG Ultra Dry"
      image="sephora-pilot2/superberry_mask.png"
      tagline="48.00"
      title="YOUTH TO THE PEOPLE Superberry Hydrate + Glow Dream Mask"
      body="This top-rated overnight mask deeply hydrates, plumps, and brightens with powerful, antioxidant-rich super berries and THD ascorbate."
      button="Shop Now"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
