import React from 'react'
import { Image, OfferRow, Button, DefaultTemplate } from '../../src/components'

const BlackFridayEmail = () => (
  <DefaultTemplate
    preheaderText="Sunday Funday, elevated. It's your last day to do some serious shopping damage. Score the best deals on your favorite brands - only with Drop. Shop our picks below via desktop, tablet, or mobile - all from the comfort of your couch. "
    heroLink="https://b.ewd.io/BFLastChance"
    hero="black-friday-last-chance/header.gif"
    title="Hurry, promotions end tonight ⏳"
    body="Sunday Funday, elevated. It's your last day to do some serious shopping damage. Score the best deals on your favorite brands - only with Drop. Shop our picks below via desktop, tablet, or mobile - all from the comfort of your couch."
    button={
      <Button
        href="https://b.ewd.io/BFLastChance"
        className="mx-auto mt3"
        style={{ maxWidth: 300 }}
      >
        Shop Black Friday
      </Button>
    }
    footer={
      <div>
        <h2 className="mb0">Boosted offers</h2>

        <Image
          href="https://b.ewd.io/BFLastChance2"
          width="600"
          src="black-friday-last-chance-no-desktop/us_image.png"
          style={{ width: '100%', maxWidth: 600 }}
        />

        <div className="p2 mx-auto mb4" style={{ maxWidth: 300 }}>
          <Button href="https://b.ewd.io/BFLastChance">Shop all</Button>
        </div>
      </div>
    }
  >
    <h2 className="mb4">Our top picks</h2>

    <OfferRow
      brand="Jet"
      pointRate="80 PER $1"
      oldRate="40 PER $1"
      link="https://b.ewd.io/BFLastJet"
    />

    <OfferRow
      brand="BarkBox"
      pointRate="40,000"
      oldRate="20,000 "
      link="https://b.ewd.io/BFLastBarkBox"
    />

    <OfferRow
      brand="Casper"
      pointRate="100 PER $1"
      oldRate="75 PER $1"
      link="https://b.ewd.io/BFLastCasperUS"
    />
  </DefaultTemplate>
)

export default BlackFridayEmail
