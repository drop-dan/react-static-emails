import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="2019 travel hotspots for EVERY budget."
    heroLink="https://b.ewd.io/SleepUS"
    hero="sports-fitness/sports_emailbanner_v10.png"
    title="No curve balls here."
    body="Knock it out of the park with these athlete-approved offers."
    button={<Button href="https://b.ewd.io/SleepUS">Shop All</Button>}
  >

    <Offer
      image="sports-fitness/MLB_espn_emailbanner.png"
      tagline="5,000 POINTS"
      title="WATCH"
      body="ESPN+ for game time, uninterrupted."
      button="Sign Up Now"
    >
      <p>
      MLB kicked off last week, with Mariners first in the West, Rays taking  the East, and the Royals and Twins rounding out the top in Central. Tonight at 7:10 ET, the Mets take on the Marlins, the Rockies take on the Rays, and the Cubs take on the Braves. Watch your fave teams duke it out live, side by side - on all your devices. (We won't judge.)
      </p>
      <p>
      Not quite a diehard baseball fan? No need to fret — ESPN+ is your go-to sports streaming platform for the FA Cup, UFC, NHL, and countless more fan favorites. Or just looking for the Coles Notes? Go straight to the highlights. Only with ESPN+. 
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
      tagline="50 POINTS PER $1"
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
