import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Score up to 70% off fitness classes + deals on ESPN+ inside ."
    heroLink="https://b.ewd.io/SleepUS"
    hero="sports-fitness/sports_emailbanner_can.png"
    title="No curve balls here."
    body="Knock it out of the park with these athlete-approved offers."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >

    <Offer
      image="sports-fitness/seatgeek_emailbanner3.png"
      tagline="50 POINTS PER $1"
      title="WATCH"
      body="Live - with SeatGeek."
      button="Shop Now"
    >
      <p>
      MLB kicked off last week, with Mariners first in the West, Rays taking the East, and the Royals and Twins rounding out the top in Central. With SeatGeek, score 11th hour tickets - for less. 
      </p>
      <p>
      Not quite a diehard baseball fan? No need to fret — SeatGeek also hosts a wide variety of discounted live sports, concert & comedy tickets, so you can get your entertainment fix in a snap.
      </p>
    </Offer>

    <Offer
      image="sports-fitness/groupon_emailbanner3.png"
      tagline="20 POINTS PER $1"
      title="WORK OUT"
      body="With Groupon for seriously marked down gym time. "
      button="Shop Now"
    >
      <p>
      Sweat on a dime. Featuring yoga, HIIT classes, spin, boxing, pilates, and more - Groupon is your one shop stop for all things discounted fitness. Save up to 70% on top-rated classes in your area - we'll exercise to that.
      </p>
    </Offer>
   
    <Offer
      image="sports-fitness/lululemon_female_emailbanner1.png"
      tagline="40 POINTS PER $1"
      title="WEAR"
      body="Lululemon for functional fitness."
      button="Shop Now"
      divider={false}
    >
      <p>
      Own your workout with Yogi favorite, Lululemon. Shop bestsellers for training, running, yoga, and more. Plus, breathe easy with free shipping and free returns.
      </p>
    </Offer>
    
  </DefaultTemplate>
)

export default BlackFridayEmail
