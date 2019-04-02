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
      Baseball is back and so are your favorite teams and players! Stream the MLB Game of the Day in HD all season long on ESPN+. Keep up with all the action every day - that's right. Tonight, watch the defending champion Boston Red Sox take on the Oakland Athletics. 
      </p>
      <p>
      Plus, with ESPN+ you get access to live sports like UFC, MLS, NHL and more for only $4.99 a month or $49.99 a year. Start your free trial now.
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
      image="sports-fitness/lululemon_male_emailbanner1.png"
      tagline="50 POINTS PER $1"
      title="WEAR"
      body="Lululemon for functional fitness."
      button="Shop Now"
      divider={false}
    >
      <p>
      Own your workout with breathable gear from Yogi favorite, Lululemon. Shop bestsellers that have you covered for training, running, yoga, and more. Plus, breathe easy with free shipping and free returns.
      </p>
    </Offer>
    
  </DefaultTemplate>
)

export default BlackFridayEmail
