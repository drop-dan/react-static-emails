import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="A round-up of our favorite influencers' Coachella style inside."
    heroLink="https://b.ewd.io/SleepUS"
    hero="coachella/coachella_emailbanner_ca.gif"
    title="Because you don't have to spend a weekend in the desert to look cute."
    body="Recreate these (totally affordable) festival showstoppers from the comfort of your couch."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All Looks</Button>}
  >

    <Offer
      image="coachella/adidas_products.png"
      tagline="50 PER $1"
      brand="adidas"
      body="This badass biker look gets our final rose."
      button="Shop Look 1"
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
      button="Shop Look 2"
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

<Offer
      image="coachella/Coachelle_IG_FeedPost.png"
      body="Enter for your chance to win 1 of 3 ultimate festival kits with Drop, valued at $850!*"
      button="Enter Now"
      note="*Full contest details in app."
      divider={false}
      >
     <p>
      Curated by influencers such as @weylie, @sophiachang, @nazaninkavari, @jason_tartick, @balockaye.h, and more! Kit includes hot products from brands like Warby Parker, IGK and Too Faced. Check out the full list in app and enter today.
      </p>
    </Offer>


  </DefaultTemplate>
)

export default BlackFridayEmail
