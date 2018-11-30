import React from 'react'
import { DefaultTemplate, Offer, Button } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Starting tomorrow, score the best deals on your favorite brands - only with Drop."
    heroLink="https://b.ewd.io/BlackFridayCA"
    hero="black-friday/bf-header.gif"
    title="Black Friday On Now"
    body="Use Drop for the best Black Friday deals and get up to 30% back in points. Hurry, offers unboost Sunday."
  >
    <Offer
      brand="Indigo"
      body="Shop home, toys for the tykes in your life, and new holiday reads - for you. Take up to 40% off, with 1000s of new items on sale."
      link="https://b.ewd.io/BFLIndigo"
      pointRate="50 PER $1"
      oldRate="was 30 per $1"
    />

    <Offer
      brand="Forever 21"
      body="Today only, enjoy 30% off site-wide with promo code TGIBF."
      link="https://b.ewd.io/BFForever21"
      pointRate="40 PER $1"
      oldRate="was 20 per $1"
    />

    <Offer
      brand="Casper"
      body="A spring in your step is good. A spring in your back is bad. Take 10% off mattress orders."
      link="https://b.ewd.io/BFCACasper"
      pointRate="100 PER $1"
      oldRate="was 75 per $1"
    />

    <Offer
      brand="Evernew"
      body="Ever deals. Take 25% off everything for Black Friday."
      link="https://b.ewd.io/BFLEverNew"
      pointRate="100 per $1"
      oldRate="was 50 per $1"
    />

    <Offer
      brand="Warby Parker"
      body="Expect better specs. Shop Warby Parker and get 30% back in points."
      link="https://b.ewd.io/BFLWarbyCA"
      pointRate="300 PER $1"
      oldRate="was 200 per $1"
    />

    <Offer
      brand="Charlotte Tilbury"
      body="Blush, please. Take 40% off Smokey Eye Beauty, and morning and nighttime Skincare Kits."
      link="https://b.ewd.io/BFLCharlotteCA"
      pointRate="80 PER $1"
      oldRate="was 50 per $1"
    />

    <Offer
      brand="Frank & Oak"
      body="Sweater weather isn't going anywhere. Stock up with 30% off everything*."
      link="https://b.ewd.io/BFLFrankCA"
      pointRate="60 PER $1"
      oldRate="was 50 per $1"
    />

    <h2>Up to DOUBLE the points + major savings to boot.</h2>

    <p>
      Shop these deals and many more from brands like BarkBox, Tatcha, Lululemon, Tillys, S'well,
      Ulta, Kobo, and more - only with Drop.
    </p>

    <Button href="https://b.ewd.io/BlackFridayCA" className="wide mt3 mb2 mx-auto">
      Shop now
    </Button>
  </DefaultTemplate>
)

export default BlackFridayEmail
