import React from 'react'
import { Main, Header, HeroImage, Footer, ItemRow, Button, Image } from '../../src/components'

const BlackFridayEmail = () => (
  <Main preheaderText="Sunday Funday, elevated. It's your last day to do some serious shopping damage. Score the best deals on your favorite brands - only with Drop. Shop our picks below via desktop, tablet, or mobile - all from the comfort of your couch. ">
    <Header />

    <HeroImage href="https://b.ewd.io/BFLastChanceCA" image="black-friday-last-chance/header.gif" />

    <div className="p2 mx-auto" style={{ maxWidth: 480 }}>
      <h2 className="mt4 mb0">Hurry, promotions end tonight ⏳</h2>

      <p className="my2">
        Sunday Funday, elevated. It's your last day to do some serious shopping damage. Score the
        best deals on your favorite brands - only with Drop. Shop our picks below via desktop,
        tablet, or mobile - all from the comfort of your couch.
      </p>

      <Button
        href="https://b.ewd.io/BFLastChanceCA"
        className="mx-auto mt3"
        style={{ maxWidth: 300 }}
      >
        Shop Black Friday
      </Button>

      <div className="divider" />

      <h2 className="mb4">Our top picks</h2>

      <ItemRow
        brand="BarkBox"
        pointRate="40,000"
        oldRate="20,000 "
        link="https://b.ewd.io/BFLastBarkBoxCA"
      />

      <ItemRow
        brand="Casper"
        pointRate="100 PER $1"
        oldRate="75 PER $1"
        link="https://b.ewd.io/BFLastCasperCA"
      />

      <ItemRow
        brand="Forever 21"
        pointRate="40 PER $1"
        oldRate="20 PER $1"
        link="https://b.ewd.io/BFLastForever"
      />
    </div>

    <div className="divider" style={{ marginTop: 0 }} />

    <h2 className="mb0">Boosted offers</h2>

    <Image
      width="600"
      src="black-friday-last-chance-no-desktop/ca_image.png"
      style={{ width: '100%', maxWidth: 600 }}
    />

    <div className="p2 mx-auto mb4" style={{ maxWidth: 300 }}>
      <Button href="https://b.ewd.io/BFLastChanceCA">Shop all</Button>
    </div>

    <Footer />
  </Main>
)

export default BlackFridayEmail
