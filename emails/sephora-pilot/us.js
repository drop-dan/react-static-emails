import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Shop Sephora through Drop + you'll earn 100 points for every dollar you spend. Makeup and skincare so good, you won't need a filter. Out with the old, in with the new."
    heroLink="https://b.ewd.io/SleepUS"
    hero="sephora-pilot/sephora_emailbanner.gif"
    title="Makeup and skincare so good, you won't need a filter."
    body="Out with the old, in with the new. Shop Sephora through Drop + you'll earn 100 points for every dollar you spend."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >

    <Offer
      brand="Drunk Elephant Umbra Sheer Physical Daily Defense Broad Spectrum Sunscreen SPF 30."
      image="sephora-pilot/gwyneth.png"
      body="Steal Gwyneth's daytime routine. The Goop founder and skin aficionado uses Drunk Elephant's Daily Defense SPF to protect her skin from the sun's damaging rays."
      button="Shop Now"
    />
    <Offer
      brand="Fenty Stunna Lip Paint Longwear Fluid Lip Color in Red"
      image="sephora-pilot/rihanna.png"
      body="A universal go-to for all skin types, the Fenty favourite promises precision, so you can skip the lip liner. Take it from Riri, bold is the new black."
      button="Shop Now"
    />
    <Offer
      image="sephora-pilot/meghan.png"
      brand="Jo Malone London Wild Bluebell Perfume"
      body="Smell like royalty. Our fave Duchess of Sussex reaches for Jo Malone's Wild Bluebell perfume every morning before venturing out of Kensington Palace."
      button="Shop Now"
    />
    <Offer
      brand="Bobbi Brown Skin Foundation Sticks"
      image="sephora-pilot/kate.png"
      body="The Sport Illustrated model keeps her skin looking flawless with Bobbi Brown's Skin Foundation Sticks. A few light swipes, and you're well on your way to perfection."
      button="Shop Now"
      divider={false}
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
