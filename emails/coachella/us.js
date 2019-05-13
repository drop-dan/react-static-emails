import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Don't leave your skin high and dry. Put your best face forward and earn 100 points for every dollar you spend."
    heroLink="https://b.ewd.io/SleepUS"
    hero="coachella/coachella_emailbanner_us.gif"
    title="Because you don't have to spend a weekend in the desert to look cute."
    body="Recreate these (totally affordable) festival showstoppers from the comfort of your couch."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All Looks</Button>}
  >

    <Offer
      brand="ModCloth" 
      image="coachella/modcloth_product3.png"
      tagline="45 PER $1"
      body="Paint the town red in spring's most groundbreaking florals."
      button="Shop Look 1"
      divider={false}
      >
      <p>
        <b>1)</b> Breezy Tendancy Crop Top 
      </p>
      <p>
        <b>2)</b> Stay Classy Skater Skirt
      </p>
      <p>
        <b>3)</b> Heads or Trails Lace Up Boots
      </p>
      <p>
        <b>4)</b> The Reese One Piece Swimsuit
      </p>
      <p>
        <b>5)</b> Touch of Luxe Suede Bootie
      </p>
    </Offer>
  
    <Offer
      image="coachella/modcloth_products_v2.png"
      tagline="45 PER $1"
      body="What's black + brown with polka dots all over? This fierce look, you can rock year-round. "
      button="Shop Look 2"
      divider={true}
      >
      <p>
        <b>1)</b> Chance Encounter Faux Wrap Dress
      </p>
      <p>
        <b>2)</b> Heads or Trails Lace Up Boots
      </p>
      <p>
        <b>3)</b> Pinafore Perfection Maxi Skirt
      </p>
    </Offer>

    <Offer
      image="coachella/adidas_products.png"
      tagline="20 PER $1"
      brand="adidas"
      body="This badass biker look gets our final rose."
      button="Shop Look 3"
      >
      <p>
        <b>1)</b> Warp Knit Tank Top 
      </p>
      <p>
        <b>2)</b> Bum Bag
      </p>
      <p>
        <b>3)</b> Biker Shorts
      </p>
      <p>
        <b>4)</b> Superstar Boots
      </p>
    </Offer>
    
    <Offer
      image="coachella/asos_products3.png"
      tagline="40 PER $1"
      brand="ASOS"
      body="Make all white everything a thing."
      button="Shop Look 4"
      divider={false}
      >
      <p>
        <b>1)</b> Curve Multirow Necklace With Worn Coin and Crystal Detail
      </p>
      <p>
        <b>2)</b> 4th & Reckless Crop Top 
      </p>
      <p>
        <b>3)</b> 4th & Reckless Mini Skirt 
      </p>
      <p>
        <b>4)</b> New Look Two-Piece Revere Shirt in Leaf Print 
      </p>
    </Offer>
  </DefaultTemplate>
)

export default BlackFridayEmail
